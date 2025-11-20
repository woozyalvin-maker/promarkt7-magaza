import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Phone, Menu, X, LogOut, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { brands } from '@/data/products';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const { totalItems } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, profile, isAdmin, signOut, loading } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    const { error } = await signOut();
    
    if (error) {
      toast({
        title: 'Hata',
        description: 'Çıkış yapılırken bir hata oluştu.',
        variant: 'destructive',
      });
      return;
    }
    
    toast({
      title: 'Çıkış yapıldı',
      description: 'Başarıyla çıkış yaptınız.',
    });
    
    navigate('/');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/urunler?search=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  const sortedBrands = [...brands].sort((a, b) => a.localeCompare(b, 'tr'));

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="container-custom py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+90 (538) 258 21 58</span>
          </div>
          <span>500₺ Üzeri Siparişlerde - Ücretsiz Kargo</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-custom py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold flex items-center gap-0">
            <span className="text-foreground">ProMarkt</span>
            <span className="text-primary">7</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <form onSubmit={handleSearch} className="relative w-full">
              <Input
                type="text"
                placeholder="Ürün ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-10"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="hidden md:flex">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem disabled>
                    <span className="text-sm font-medium">
                      {loading
                        ? 'Yükleniyor...'
                        : profile?.first_name && profile?.last_name
                          ? `${profile.first_name} ${profile.last_name}`
                          : user?.email ?? 'Hesabım'}
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {isAdmin && (
                    <>
                      <DropdownMenuItem asChild>
                        <Link to="/admin" className="cursor-pointer">
                          <User className="mr-2 h-4 w-4" />
                          Admin Dashboard
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                    </>
                  )}
                  <DropdownMenuItem asChild>
                    <Link to="/profil" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      Profilim
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Çıkış Yap
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth">
                <Button variant="ghost" size="icon" className="hidden md:flex">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            )}
            
            <Link to="/sepet">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center justify-center gap-6 mt-4 border-t border-border pt-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.path) ? 'text-primary' : 'text-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Markalar Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                location.pathname === '/urunler' ? 'text-primary' : 'text-foreground'
              }`}>
                Markalar
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56 max-h-[400px] overflow-y-auto bg-background">
              {sortedBrands.map((brand) => (
                <DropdownMenuItem key={brand} asChild>
                  <Link 
                    to={`/urunler?brand=${encodeURIComponent(brand)}`}
                    className="cursor-pointer"
                  >
                    {brand}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border animate-slide-in">
          <div className="container-custom py-4">
            {/* Mobile Search */}
            <div className="mb-4">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="text"
                  placeholder="Ürün ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-10"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-8"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Markalar Dropdown - Mobile */}
              <div className="border-t border-border mt-2 pt-2">
                <div className="py-2 px-4 text-sm font-medium text-muted-foreground">
                  Markalar
                </div>
                <div className="flex flex-col gap-1 max-h-[300px] overflow-y-auto">
                  {sortedBrands.map((brand) => (
                    <Link
                      key={brand}
                      to={`/urunler?brand=${encodeURIComponent(brand)}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 px-4 rounded-lg text-sm font-medium transition-colors hover:bg-muted"
                    >
                      {brand}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* User Menu Items - Mobile */}
              {user && (
                <>
                  <div className="border-t border-border mt-2 pt-2">
                    <div className="py-2 px-4 text-sm font-medium text-muted-foreground">
                      {profile?.first_name && profile?.last_name 
                        ? `${profile.first_name} ${profile.last_name}` 
                        : 'Yükleniyor...'}
                    </div>
                    {isAdmin && (
                      <Link
                        to="/admin"
                        onClick={() => setMobileMenuOpen(false)}
                        className="py-2 px-4 rounded-lg text-sm font-medium transition-colors hover:bg-muted flex items-center gap-2"
                      >
                        <User className="h-4 w-4" />
                        Admin Dashboard
                      </Link>
                    )}
                    <Link
                      to="/profil"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 px-4 rounded-lg text-sm font-medium transition-colors hover:bg-muted flex items-center gap-2"
                    >
                      <User className="h-4 w-4" />
                      Profilim
                    </Link>
                    <button
                      onClick={() => {
                        handleSignOut();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full text-left py-2 px-4 rounded-lg text-sm font-medium transition-colors hover:bg-muted flex items-center gap-2"
                    >
                      <LogOut className="h-4 w-4" />
                      Çıkış Yap
                    </button>
                  </div>
                </>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
