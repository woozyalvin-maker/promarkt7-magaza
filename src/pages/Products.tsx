import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Grid, List, SlidersHorizontal } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products, categories, brands } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card } from '@/components/ui/card';

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('kategori');
  const searchQuery = searchParams.get('search');

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryFromUrl ? [categoryFromUrl] : []
  );
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortBy, setSortBy] = useState('recommended');
  const [showFilters, setShowFilters] = useState(true);

  // Update selected categories when URL parameter changes
  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategories([categoryFromUrl]);
    }
  }, [categoryFromUrl]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery && searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.category));
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((p) => selectedBrands.includes(p.brand));
    }

    // Price filter
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'bestseller':
        filtered.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
        break;
      default:
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategories, selectedBrands, priceRange, sortBy]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  return (
    <div className="container-custom py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside
          className={`lg:w-64 flex-shrink-0 ${
            showFilters ? 'block' : 'hidden lg:block'
          }`}
        >
          <Card className="p-6 sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold">Filtreler</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedBrands([]);
                  setPriceRange([0, 2000]);
                }}
              >
                Temizle
              </Button>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h4 className="font-medium mb-3 text-sm">Kategoriler</h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <div key={cat.name} className="flex items-center gap-2">
                    <Checkbox
                      id={`cat-${cat.name}`}
                      checked={selectedCategories.includes(cat.name)}
                      onCheckedChange={() => toggleCategory(cat.name)}
                    />
                    <Label
                      htmlFor={`cat-${cat.name}`}
                      className="text-sm cursor-pointer flex-1"
                    >
                      {cat.name} ({cat.count})
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div className="mb-6">
              <h4 className="font-medium mb-3 text-sm">Markalar</h4>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center gap-2">
                    <Checkbox
                      id={`brand-${brand}`}
                      checked={selectedBrands.includes(brand)}
                      onCheckedChange={() => toggleBrand(brand)}
                    />
                    <Label
                      htmlFor={`brand-${brand}`}
                      className="text-sm cursor-pointer flex-1"
                    >
                      {brand}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h4 className="font-medium mb-3 text-sm">Fiyat Aralığı</h4>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={2000}
                step={50}
                className="mb-3"
              />
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>₺{priceRange[0]}</span>
                <span>₺{priceRange[1]}</span>
              </div>
            </div>
          </Card>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-5 w-5" />
              </Button>
              <div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">{filteredProducts.length}</span> ürün
                  bulundu
                </p>
                {searchQuery && (
                  <p className="text-sm text-muted-foreground mt-1">
                    "<span className="font-semibold">{searchQuery}</span>" için sonuçlar
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Önerilen</SelectItem>
                  <SelectItem value="price-low">Fiyat (Düşük-Yüksek)</SelectItem>
                  <SelectItem value="price-high">Fiyat (Yüksek-Düşük)</SelectItem>
                  <SelectItem value="newest">En Yeni</SelectItem>
                  <SelectItem value="bestseller">En Çok Satan</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'flex flex-col gap-4'
              }
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">
                Aradığınız kriterlere uygun ürün bulunamadı.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedBrands([]);
                  setPriceRange([0, 2000]);
                }}
              >
                Filtreleri Temizle
              </Button>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
