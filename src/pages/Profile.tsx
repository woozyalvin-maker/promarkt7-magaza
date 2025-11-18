import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';
import { Helmet } from 'react-helmet';
import { User, Loader2, Lock } from 'lucide-react';

const profileSchema = z.object({
  firstName: z.string().trim().min(1, { message: 'Ad girilmesi zorunludur' }).max(50),
  lastName: z.string().trim().min(1, { message: 'Soyad girilmesi zorunludur' }).max(50),
});

const passwordSchema = z.object({
  currentPassword: z.string().min(6, { message: 'Mevcut şifre en az 6 karakter olmalıdır' }),
  newPassword: z.string().min(6, { message: 'Yeni şifre en az 6 karakter olmalıdır' }).max(72),
  confirmPassword: z.string().min(6, { message: 'Şifre tekrarı en az 6 karakter olmalıdır' }),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Şifreler eşleşmiyor",
  path: ["confirmPassword"],
});

const Profile = () => {
  const { user, profile, loading: authLoading, refreshProfile } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordLoading, setIsPasswordLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (profile) {
      setFirstName(profile.first_name);
      setLastName(profile.last_name);
    }
  }, [profile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validated = profileSchema.parse({ firstName, lastName });
      setIsLoading(true);

      const { error } = await supabase
        .from('profiles')
        .update({
          first_name: validated.firstName,
          last_name: validated.lastName,
        })
        .eq('id', user?.id);

      if (error) {
        toast({
          title: 'Güncelleme başarısız',
          description: error.message,
          variant: 'destructive',
        });
        return;
      }

      toast({
        title: 'Profil güncellendi!',
        description: 'Bilgileriniz başarıyla güncellendi.',
      });
      
      // Refresh profile data and wait for it to complete
      await refreshProfile();
      
      // Wait a bit more to ensure state is updated
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Redirect to home page
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

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validated = passwordSchema.parse({ currentPassword, newPassword, confirmPassword });
      setIsPasswordLoading(true);

      // First verify current password
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: user?.email || '',
        password: validated.currentPassword,
      });

      if (signInError) {
        toast({
          title: 'Mevcut şifre hatalı',
          description: 'Lütfen mevcut şifrenizi kontrol edin.',
          variant: 'destructive',
        });
        return;
      }

      // Update to new password
      const { error: updateError } = await supabase.auth.updateUser({
        password: validated.newPassword,
      });

      if (updateError) {
        toast({
          title: 'Şifre değiştirilemedi',
          description: updateError.message,
          variant: 'destructive',
        });
        return;
      }

      toast({
        title: 'Şifre değiştirildi!',
        description: 'Şifreniz başarıyla güncellendi.',
      });

      // Clear password fields
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: 'Geçersiz giriş',
          description: error.errors[0].message,
          variant: 'destructive',
        });
      }
    } finally {
      setIsPasswordLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Profilim - ProMarkt7</title>
        <meta name="description" content="Profil bilgilerinizi görüntüleyin ve güncelleyin." />
      </Helmet>
      
      <div className="min-h-screen py-12 px-4 bg-muted/30">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Profile Information Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Profilim</CardTitle>
                  <CardDescription className="text-xs mt-1">{user?.email}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Ad</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Adınız"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Soyad</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Soyadınız"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>E-posta</Label>
                    <Input
                      type="email"
                      value={user?.email || ''}
                      disabled
                      className="bg-muted"
                    />
                    <p className="text-xs text-muted-foreground">
                      E-posta adresiniz değiştirilemez
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="flex-1"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Güncelleniyor...
                      </>
                    ) : (
                      'Değişiklikleri Kaydet'
                    )}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => navigate('/')}
                    disabled={isLoading}
                  >
                    İptal
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Password Change Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Şifre Değiştir</CardTitle>
                  <CardDescription className="mt-1">Hesap şifrenizi güncelleyin</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePasswordChange} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Mevcut Şifre</Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      placeholder="••••••••"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      required
                      disabled={isPasswordLoading}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">Yeni Şifre</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      placeholder="••••••••"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                      disabled={isPasswordLoading}
                    />
                    <p className="text-xs text-muted-foreground">
                      Şifre en az 6 karakter olmalıdır
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Yeni Şifre Tekrar</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      disabled={isPasswordLoading}
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={isPasswordLoading}
                  className="w-full"
                >
                  {isPasswordLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Güncelleniyor...
                    </>
                  ) : (
                    'Şifreyi Güncelle'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Profile;
