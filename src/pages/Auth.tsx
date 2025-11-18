import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';
import { Helmet } from 'react-helmet';

const authSchema = z.object({
  email: z.string().trim().email({ message: 'Geçerli bir e-posta adresi giriniz' }).max(255),
  password: z.string().min(6, { message: 'Şifre en az 6 karakter olmalıdır' }).max(72),
});

const signupSchema = authSchema.extend({
  firstName: z.string().trim().min(1, { message: 'Ad girilmesi zorunludur' }).max(50),
  lastName: z.string().trim().min(1, { message: 'Soyad girilmesi zorunludur' }).max(50),
});

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isResetLoading, setIsResetLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [resetDialogOpen, setResetDialogOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/');
      }
    };
    checkUser();
  }, [navigate]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validated = signupSchema.parse({ email, password, firstName, lastName });
      setIsLoading(true);

      const { error } = await supabase.auth.signUp({
        email: validated.email,
        password: validated.password,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: {
            first_name: validated.firstName,
            last_name: validated.lastName,
          }
        }
      });

      if (error) {
        if (error.message.includes('already registered')) {
          toast({
            title: 'Bu e-posta zaten kayıtlı',
            description: 'Lütfen giriş yapın veya farklı bir e-posta deneyin.',
            variant: 'destructive',
          });
        } else {
          toast({
            title: 'Kayıt başarısız',
            description: error.message,
            variant: 'destructive',
          });
        }
        return;
      }

      toast({
        title: 'Kayıt başarılı!',
        description: 'E-posta adresinizi doğrulamanız gerekebilir. Gelen kutunuzu kontrol edin.',
      });
      
      // Auto login after signup if email confirmation is disabled
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/');
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: 'Geçersiz giriş',
          description: error.errors[0].message,
          variant: 'destructive',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validated = authSchema.parse({ email, password });
      setIsLoading(true);

      const { error } = await supabase.auth.signInWithPassword({
        email: validated.email,
        password: validated.password,
      });

      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          toast({
            title: 'Giriş başarısız',
            description: 'E-posta veya şifre hatalı.',
            variant: 'destructive',
          });
        } else {
          toast({
            title: 'Giriş başarısız',
            description: error.message,
            variant: 'destructive',
          });
        }
        return;
      }

      toast({
        title: 'Giriş başarılı!',
        description: 'Hoş geldiniz.',
      });
      navigate('/');
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: 'Geçersiz giriş',
          description: error.errors[0].message,
          variant: 'destructive',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validated = z.object({
        email: z.string().trim().email({ message: 'Geçerli bir e-posta adresi giriniz' }),
      }).parse({ email: resetEmail });
      
      setIsResetLoading(true);

      const { error } = await supabase.auth.resetPasswordForEmail(validated.email, {
        redirectTo: `${window.location.origin}/auth`,
      });

      if (error) {
        toast({
          title: 'Hata',
          description: error.message,
          variant: 'destructive',
        });
        return;
      }

      toast({
        title: 'E-posta gönderildi!',
        description: 'Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.',
      });
      
      setResetDialogOpen(false);
      setResetEmail('');
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: 'Geçersiz e-posta',
          description: error.errors[0].message,
          variant: 'destructive',
        });
      }
    } finally {
      setIsResetLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/`,
        }
      });

      if (error) {
        toast({
          title: 'Google ile giriş başarısız',
          description: error.message,
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Bir hata oluştu',
        description: 'Google ile giriş yapılamadı.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Giriş Yap / Kayıt Ol - ProMarkt7</title>
        <meta name="description" content="ProMarkt7 hesabınıza giriş yapın veya yeni hesap oluşturun. Güvenli alışverişin tadını çıkarın." />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-muted/30">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Link to="/" className="text-3xl font-bold flex items-center justify-center gap-0 mb-2">
              <span className="text-foreground">ProMarkt</span>
              <span className="text-primary">7</span>
            </Link>
            <CardTitle>Hesabınıza Giriş Yapın</CardTitle>
            <CardDescription>
              Alışverişe devam etmek için giriş yapın veya kayıt olun
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Giriş Yap</TabsTrigger>
                <TabsTrigger value="signup">Kayıt Ol</TabsTrigger>
              </TabsList>
              
              <TabsContent value="signin">
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email">E-posta</Label>
                    <Input
                      id="signin-email"
                      type="email"
                      placeholder="ornek@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signin-password">Şifre</Label>
                    <Input
                      id="signin-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="remember-me" 
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                      disabled={isLoading}
                    />
                    <label
                      htmlFor="remember-me"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      Beni hatırla
                    </label>
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
                  </Button>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">veya</span>
                    </div>
                  </div>
                  
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full"
                    onClick={handleGoogleSignIn}
                    disabled={isLoading}
                  >
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Google ile Giriş Yap
                  </Button>
                  
                  <Dialog open={resetDialogOpen} onOpenChange={setResetDialogOpen}>
                    <DialogTrigger asChild>
                      <Button variant="link" className="w-full text-sm text-muted-foreground hover:text-primary" type="button">
                        Şifremi unuttum
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Şifre Sıfırlama</DialogTitle>
                        <DialogDescription>
                          E-posta adresinizi girin, size şifre sıfırlama bağlantısı gönderelim.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handlePasswordReset} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="reset-email">E-posta</Label>
                          <Input
                            id="reset-email"
                            type="email"
                            placeholder="ornek@email.com"
                            value={resetEmail}
                            onChange={(e) => setResetEmail(e.target.value)}
                            required
                            disabled={isResetLoading}
                          />
                        </div>
                        <Button type="submit" className="w-full" disabled={isResetLoading}>
                          {isResetLoading ? 'Gönderiliyor...' : 'Sıfırlama Bağlantısı Gönder'}
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </form>
              </TabsContent>
              
              <TabsContent value="signup">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-firstname">Ad</Label>
                    <Input
                      id="signup-firstname"
                      type="text"
                      placeholder="Adınız"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-lastname">Soyad</Label>
                    <Input
                      id="signup-lastname"
                      type="text"
                      placeholder="Soyadınız"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">E-posta</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="ornek@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Şifre</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                    <p className="text-xs text-muted-foreground">
                      Şifre en az 6 karakter olmalıdır
                    </p>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Kayıt yapılıyor...' : 'Kayıt Ol'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center text-sm">
              <Link to="/" className="text-muted-foreground hover:text-primary">
                Ana sayfaya dön
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Auth;
