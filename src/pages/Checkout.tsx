import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Landmark } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const { user, profile, loading } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState('card');

  useEffect(() => {
    if (!loading && !user) {
      toast.error('Satın alma işlemi için giriş yapmalısınız');
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  const shippingCost = totalPrice >= 500 ? 0 : 29.9;
  const finalTotal = totalPrice + shippingCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Siparişiniz başarıyla alındı!');
    clearCart();
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  if (items.length === 0) {
    navigate('/sepet');
    return null;
  }

  if (loading) {
    return (
      <div className="container-custom py-8 flex items-center justify-center min-h-[400px]">
        <p className="text-muted-foreground">Yükleniyor...</p>
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      <h1 className="mb-8">Ödeme</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Info */}
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">İletişim Bilgileri</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Ad Soyad *</Label>
                  <Input 
                    id="fullName" 
                    required 
                    placeholder="Adınız ve soyadınız"
                    defaultValue={profile ? `${profile.first_name} ${profile.last_name}` : ''}
                  />
                </div>
                <div>
                  <Label htmlFor="email">E-posta *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="ornek@email.com"
                    defaultValue={user?.email || ''}
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="phone">Telefon *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+90 (5XX) XXX XX XX"
                  />
                </div>
              </div>
            </Card>

            {/* Shipping Address */}
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Teslimat Adresi</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="addressTitle">Adres Başlığı *</Label>
                  <Input id="addressTitle" required placeholder="Ev, İş vb." />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">İl *</Label>
                    <Input id="city" required placeholder="İl seçin" />
                  </div>
                  <div>
                    <Label htmlFor="district">İlçe *</Label>
                    <Input id="district" required placeholder="İlçe seçin" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Adres *</Label>
                  <Input
                    id="address"
                    required
                    placeholder="Mahalle, sokak, bina no"
                  />
                </div>
                <div>
                  <Label htmlFor="addressNote">Adres Tarifi (Opsiyonel)</Label>
                  <Input
                    id="addressNote"
                    placeholder="Teslimat için ek bilgiler"
                  />
                </div>
              </div>
            </Card>

            {/* Payment Method */}
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Ödeme Yöntemi</h3>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-center space-x-3 p-3 border rounded-lg mb-3">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex items-center gap-2 flex-1">
                    <CreditCard className="h-5 w-5" />
                    Kredi/Banka Kartı
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 border rounded-lg mb-3">
                  <RadioGroupItem value="cash" id="cash" />
                  <Label htmlFor="cash" className="flex-1">
                    Kapıda Ödeme
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 border rounded-lg">
                  <RadioGroupItem value="transfer" id="transfer" />
                  <Label htmlFor="transfer" className="flex items-center gap-2 flex-1">
                    <Landmark className="h-5 w-5" />
                    Havale/EFT
                  </Label>
                </div>
              </RadioGroup>

              {paymentMethod === 'card' && (
                <div className="mt-6 space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Kart Numarası *</Label>
                    <Input
                      id="cardNumber"
                      required
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Son Kullanma *</Label>
                      <Input id="expiry" required placeholder="AA/YY" />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV *</Label>
                      <Input id="cvv" required placeholder="123" />
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h3 className="font-semibold text-lg mb-4">Sipariş Özeti</h3>

              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium line-clamp-2">{item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.quantity} adet x ₺{item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Ara Toplam:</span>
                  <span className="font-medium">₺{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Kargo:</span>
                  <span className="font-medium">
                    {shippingCost === 0 ? (
                      <span className="text-success">Ücretsiz</span>
                    ) : (
                      `₺${shippingCost.toFixed(2)}`
                    )}
                  </span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between mb-6">
                <span className="font-bold text-lg">Ödenecek Tutar:</span>
                <span className="font-bold text-2xl text-primary">
                  ₺{finalTotal.toFixed(2)}
                </span>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Siparişi Tamamla
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Siparişinizi tamamlayarak{' '}
                <a href="#" className="text-primary hover:underline">
                  kullanım koşullarını
                </a>{' '}
                kabul etmiş olursunuz.
              </p>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
