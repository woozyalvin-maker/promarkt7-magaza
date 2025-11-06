import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Minus, Plus, ChevronLeft, ZoomIn, X } from 'lucide-react';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useCart } from '@/contexts/CartContext';
import ProductCard from '@/components/ProductCard';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedVariants, setSelectedVariants] = useState<{ [key: string]: string }>({});
  const [isImageOpen, setIsImageOpen] = useState(false);

  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="mb-4">Ürün Bulunamadı</h1>
        <Link to="/urunler">
          <Button>Ürünlere Dön</Button>
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariants);
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div className="container-custom py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-primary">
          Ana Sayfa
        </Link>
        <ChevronLeft className="h-4 w-4 rotate-180" />
        <Link to="/urunler" className="hover:text-primary">
          Ürünler
        </Link>
        <ChevronLeft className="h-4 w-4 rotate-180" />
        <span className="text-foreground">{product.name}</span>
      </div>

      {/* Product Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Images */}
        <div>
          <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
            <DialogTrigger asChild>
              <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4 cursor-zoom-in group relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                    <ZoomIn className="h-8 w-8 text-primary" />
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-none">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute -top-12 right-0 h-10 w-10 rounded-full bg-white/90 hover:bg-white text-black z-10"
                  onClick={() => setIsImageOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Details */}
        <div>
          <Link
            to={`/urunler?marka=${encodeURIComponent(product.brand)}`}
            className="text-sm text-primary hover:underline mb-2 inline-block"
          >
            {product.brand}
          </Link>

          <h1 className="mb-4">{product.name}</h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-primary text-primary'
                      : 'text-muted'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              ({product.reviewCount} değerlendirme)
            </span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            {product.originalPrice && (
              <span className="price-old text-xl">₺{product.originalPrice}</span>
            )}
            <span className="text-4xl font-bold text-primary">₺{product.price}</span>
            {product.discount && (
              <Badge className="bg-destructive">%{product.discount} İndirim</Badge>
            )}
          </div>

          {product.inStock ? (
            <Badge className="bg-success mb-6">Stokta Var</Badge>
          ) : (
            <Badge variant="destructive" className="mb-6">
              Tükendi
            </Badge>
          )}

          {/* Variants */}
          {product.variants && product.variants.length > 0 && (
            <div className="space-y-4 mb-6">
              {product.variants.map((variant) => (
                <div key={variant.name}>
                  <label className="text-sm font-medium mb-2 block">
                    {variant.name}
                  </label>
                  <Select
                    value={selectedVariants[variant.name] || ''}
                    onValueChange={(value) =>
                      setSelectedVariants({ ...selectedVariants, [variant.name]: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={`${variant.name} seçin`} />
                    </SelectTrigger>
                    <SelectContent>
                      {variant.options.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>
          )}

          {/* Quantity */}
          <div className="mb-6">
            <label className="text-sm font-medium mb-2 block">Adet</label>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={decrementQuantity}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
              <Button variant="outline" size="icon" onClick={incrementQuantity}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mb-6">
            <Button
              size="lg"
              className="flex-1"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Sepete Ekle
            </Button>
            <Button variant="secondary" size="lg">
              Hemen Al
            </Button>
            <Button variant="outline" size="icon" className="h-12 w-12">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          {/* Features */}
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Ürün Özellikleri</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-sm flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="description" className="mb-16">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="description">Açıklama</TabsTrigger>
          {product.nutritionFacts && (
            <TabsTrigger value="nutrition">İçindekiler</TabsTrigger>
          )}
          {product.usage && <TabsTrigger value="usage">Kullanım</TabsTrigger>}
        </TabsList>

        <TabsContent value="description" className="mt-6">
          <Card className="p-6">
            <p className="text-muted-foreground">{product.description}</p>
          </Card>
        </TabsContent>

        {product.nutritionFacts && (
          <TabsContent value="nutrition" className="mt-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Besin Değerleri</h3>
              <div className="space-y-2">
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">Porsiyon Büyüklüğü:</span>
                  <span>{product.nutritionFacts.servingSize}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">Porsiyon Sayısı:</span>
                  <span>{product.nutritionFacts.servingsPerContainer}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">Kalori:</span>
                  <span>{product.nutritionFacts.calories} kcal</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">Protein:</span>
                  <span>{product.nutritionFacts.protein}g</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">Karbonhidrat:</span>
                  <span>{product.nutritionFacts.carbs}g</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">Yağ:</span>
                  <span>{product.nutritionFacts.fat}g</span>
                </div>
              </div>
            </Card>
          </TabsContent>
        )}

        {product.usage && (
          <TabsContent value="usage" className="mt-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Nasıl Kullanılır?</h3>
              <p className="text-muted-foreground">{product.usage}</p>
            </Card>
          </TabsContent>
        )}
      </Tabs>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="mb-6">Benzer Ürünler</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
