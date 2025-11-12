import { Link } from 'react-router-dom';
import { Truck, Shield, CreditCard, Headphones } from 'lucide-react';
import Hero from '@/components/Hero';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const Index = () => {
  const featuredProducts = products.filter(p => p.isBestseller || p.isNew).slice(0, 4);
  const bestsellerProducts = products.filter(p => p.isBestseller).slice(0, 8);

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Categories */}
      <section className="container-custom py-16">
        <h2 className="text-center mb-8"><span className="text-primary">Ürün</span> Kategoriler</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              icon={category.icon}
              count={category.count}
            />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container-custom py-16 bg-muted/30">
        <div className="flex items-center justify-between mb-8">
          <h2><span className="text-primary">Öne Çıkan</span> Ürünler</h2>
          <Link to="/urunler">
            <Button variant="outline">Tümünü Gör</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="container-custom py-16">
        <div className="flex items-center justify-between mb-8">
          <h2><span className="text-primary">En Çok</span> Satanlar</h2>
          <Link to="/urunler">
            <Button variant="outline">Tümünü Gör</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container-custom py-16 bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center hover-lift">
            <Truck className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Ücretsiz Kargo</h3>
            <p className="text-sm text-muted-foreground">500₺ üzeri siparişlerde</p>
          </Card>

          <Card className="p-6 text-center hover-lift">
            <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Orijinal Ürün Garantisi</h3>
            <p className="text-sm text-muted-foreground">%100 orijinal ürünler</p>
          </Card>

          <Card className="p-6 text-center hover-lift">
            <CreditCard className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Güvenli Ödeme</h3>
            <p className="text-sm text-muted-foreground">Tüm kartlar geçerli</p>
          </Card>

          <Card className="p-6 text-center hover-lift">
            <Headphones className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">7/24 Müşteri Desteği</h3>
            <p className="text-sm text-muted-foreground">Her zaman yanınızdayız</p>
          </Card>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-custom py-16">
        <Card className="p-8 md:p-12 text-center bg-gradient-to-r from-primary/10 to-accent/10">
          <h2 className="mb-4"><span className="text-primary">Kampanyalardan</span> Haberdar Ol</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            E-posta adresini girerek özel indirimler, yeni ürünler ve kampanyalardan ilk sen haberdar ol.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1"
            />
            <Button size="lg">Abone Ol</Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Index;
