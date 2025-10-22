import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';

interface CategoryCardProps {
  name: string;
  icon: string;
  count: number;
}

const CategoryCard = ({ name, icon, count }: CategoryCardProps) => {
  return (
    <Link to={`/urunler?kategori=${encodeURIComponent(name)}`}>
      <Card className="p-6 hover-lift cursor-pointer text-center group">
        <div className="text-5xl mb-3">{icon}</div>
        <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground">{count} Ürün</p>
      </Card>
    </Link>
  );
};

export default CategoryCard;
