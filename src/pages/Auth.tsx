import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
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
