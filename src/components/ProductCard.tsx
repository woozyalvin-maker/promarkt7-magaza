import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link to={`/urun/${product.id}`}>
      <Card className="hover-lift cursor-pointer overflow-hidden group h-full transition-all duration-300 hover:shadow-[0_10px_40px_-15px_hsl(var(--shadow-hover)/0.3)] hover:border-primary/20">
        <div className="relative aspect-square overflow-hidden bg-muted transition-colors duration-300 group-hover:bg-muted/80">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          
          {product.discount && (
            <Badge className="absolute top-3 right-3 bg-destructive transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
              %{product.discount} İndirim
            </Badge>
          )}
          
          {product.isBestseller && (
            <Badge className="absolute top-3 left-3 bg-primary transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
              Çok Satan
            </Badge>
          )}
          
          {product.isNew && (
            <Badge className="absolute top-3 left-3 bg-success transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
              Yeni
            </Badge>
          )}

          {!product.inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <Badge variant="destructive" className="text-lg px-4 py-2">
                Tükendi
              </Badge>
            </div>
          )}
        </div>

        <CardContent className="p-4 flex flex-col flex-1">
          <p className="text-xs text-muted-foreground mb-1 transition-colors duration-300 group-hover:text-primary/70">{product.brand}</p>
          <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>

          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-primary text-primary'
                    : 'text-muted'
                }`}
              />
            ))}
            <span className="text-xs text-muted-foreground ml-1">
              ({product.reviewCount})
            </span>
          </div>

          <div className="flex items-center gap-2 mb-3">
            {product.originalPrice && (
              <span className="price-old text-sm">₺{product.originalPrice}</span>
            )}
            <span className="price-display">₺{product.price}</span>
          </div>

          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full mt-auto transition-all duration-300 group-hover:scale-105 group-hover:shadow-md"
          >
            <ShoppingCart className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
            Sepete Ekle
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
