import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useEffect } from 'react';
import { toast } from 'sonner';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      toast.error('Sepeti görüntülemek için giriş yapmalısınız');
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  const shippingCost = totalPrice >= 500 ? 0 : 29.9;
  const finalTotal = totalPrice + shippingCost;

  if (loading) {
    return (
      <div className="container-custom py-16 flex items-center justify-center min-h-[400px]">
        <p className="text-muted-foreground">Yükleniyor...</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container-custom py-16">
        <Card className="p-12 text-center">
          <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="mb-2">Sepetiniz Boş</h2>
          <p className="text-muted-foreground mb-6">
            Sepetinizde henüz ürün bulunmuyor.
          </p>
          <Link to="/urunler">
            <Button size="lg">Alışverişe Başla</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      <h1 className="mb-8">Sepetim ({items.length} Ürün)</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={item.id} className="p-4">
              <div className="flex gap-4">
                <Link to={`/urun/${item.id}`} className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                </Link>

                <div className="flex-1 min-w-0">
                  <Link
                    to={`/urun/${item.id}`}
                    className="font-semibold hover:text-primary transition-colors line-clamp-2"
                  >
                    {item.name}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">{item.brand}</p>

                  {item.selectedVariants &&
                    Object.entries(item.selectedVariants).map(([key, value]) => (
                      <p key={key} className="text-sm text-muted-foreground">
                        {key}: {value}
                      </p>
                    ))}

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 transition-all duration-200 hover:scale-110 hover:border-primary hover:shadow-md active:scale-95"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-3 w-3 transition-transform duration-200" />
                      </Button>
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 transition-all duration-200 hover:scale-110 hover:border-primary hover:shadow-md active:scale-95"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3 transition-transform duration-200" />
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:text-destructive transition-all duration-200 hover:scale-110 hover:bg-destructive/10 active:scale-95"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-4 w-4 transition-transform duration-200 hover:rotate-12" />
                    </Button>
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-lg text-primary">₺{item.price}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Toplam: ₺{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-24">
            <h3 className="font-semibold text-lg mb-4">Sipariş Özeti</h3>

            <div className="space-y-3 mb-4">
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

              {shippingCost > 0 && (
                <p className="text-xs text-muted-foreground">
                  ₺{(500 - totalPrice).toFixed(2)} daha alışveriş yapın, kargo ücretsiz
                  olsun!
                </p>
              )}
            </div>

            <Separator className="my-4" />

            <div className="flex justify-between mb-6">
              <span className="font-bold text-lg">Toplam:</span>
              <span className="font-bold text-2xl text-primary">
                ₺{finalTotal.toFixed(2)}
              </span>
            </div>

            {/* Discount Code */}
            <div className="mb-4">
              <label className="text-sm font-medium mb-2 block">İndirim Kodu</label>
              <div className="flex gap-2">
                <Input placeholder="Kodunuzu girin" />
                <Button variant="outline">Uygula</Button>
              </div>
            </div>

            <Link to="/siparis-tamamla">
              <Button size="lg" className="w-full mb-3">
                Ödemeye Geç
              </Button>
            </Link>

            <Link to="/urunler">
              <Button variant="outline" size="lg" className="w-full">
                Alışverişe Devam Et
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
