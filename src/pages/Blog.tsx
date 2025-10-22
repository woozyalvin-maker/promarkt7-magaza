import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const blogPosts = [
  {
    id: 1,
    title: 'Protein Tozu Kullanımında Bilmeniz Gerekenler',
    excerpt: 'Protein tozu kullanımı hakkında merak ettiğiniz her şey. Doğru zamanlama, dozaj ve en etkili kullanım yöntemleri.',
    image: '/placeholder.svg',
    category: 'Beslenme',
    author: 'Ahmet Yılmaz',
    date: '15 Mart 2025',
    readTime: '5 dk',
  },
  {
    id: 2,
    title: 'Evde Spor İçin En İyi Ekipmanlar',
    excerpt: 'Evde etkili antrenmanlar için ihtiyacınız olan temel ekipmanlar ve kullanım önerileri.',
    image: '/placeholder.svg',
    category: 'Ekipman',
    author: 'Zeynep Demir',
    date: '12 Mart 2025',
    readTime: '7 dk',
  },
  {
    id: 3,
    title: 'BCAA Nedir? Ne İşe Yarar?',
    excerpt: 'Dal zinciri amino asitleri (BCAA) hakkında bilmeniz gereken her şey ve kas gelişimine etkileri.',
    image: '/placeholder.svg',
    category: 'Takviyeler',
    author: 'Mehmet Kaya',
    date: '10 Mart 2025',
    readTime: '6 dk',
  },
  {
    id: 4,
    title: 'Başlangıç Seviyesi İçin Fitness Programı',
    excerpt: 'Spora yeni başlayanlar için hazırlanmış kapsamlı 8 haftalık antrenman programı.',
    image: '/placeholder.svg',
    category: 'Antrenman',
    author: 'Ayşe Yıldız',
    date: '8 Mart 2025',
    readTime: '10 dk',
  },
  {
    id: 5,
    title: 'Kreatin Kullanımı ve Faydaları',
    excerpt: 'Kreatin monohidrat kullanımının güç ve performans üzerindeki bilimsel olarak kanıtlanmış etkileri.',
    image: '/placeholder.svg',
    category: 'Takviyeler',
    author: 'Can Öztürk',
    date: '5 Mart 2025',
    readTime: '8 dk',
  },
  {
    id: 6,
    title: 'Vücut Geliştirmede Beslenme İlkeleri',
    excerpt: 'Kas kütlesi artırmak ve yağ yakmak için uygulamanız gereken temel beslenme stratejileri.',
    image: '/placeholder.svg',
    category: 'Beslenme',
    author: 'Ahmet Yılmaz',
    date: '3 Mart 2025',
    readTime: '12 dk',
  },
];

const categories = ['Tümü', 'Beslenme', 'Antrenman', 'Takviyeler', 'Ekipman'];

const Blog = () => {
  return (
    <div className="container-custom py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">ProMarkt7 Blog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Fitness, beslenme ve spor takviyeleri hakkında uzman içerikleri keşfedin
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={category === 'Tümü' ? 'default' : 'outline'}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Featured Post */}
      <Card className="mb-12 overflow-hidden hover-lift">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-64 md:h-auto">
            <img
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="w-full h-full object-cover"
            />
            <Badge className="absolute top-4 left-4">Öne Çıkan</Badge>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary">{blogPosts[0].category}</Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {blogPosts[0].date}
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
            <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>{blogPosts[0].author}</span>
                <span>•</span>
                <span>{blogPosts[0].readTime} okuma</span>
              </div>
              <Button>
                Devamını Oku
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Blog Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.slice(1).map((post) => (
          <Card key={post.id} className="overflow-hidden hover-lift group">
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <Badge className="absolute top-4 left-4" variant="secondary">
                {post.category}
              </Badge>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <Button variant="ghost" size="sm" className="group-hover:text-primary">
                  Oku
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          Daha Fazla Göster
        </Button>
      </div>
    </div>
  );
};

export default Blog;
