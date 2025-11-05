import { useState } from 'react';
import { Calendar, User, ArrowRight, Facebook, Twitter, Linkedin, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import blogProtein from '@/assets/blog-protein.jpg';
import blogEquipment from '@/assets/blog-equipment.jpg';
import blogBcaa from '@/assets/blog-bcaa.jpg';
import blogWorkout from '@/assets/blog-workout.jpg';
import blogCreatine from '@/assets/blog-creatine.jpg';
import blogNutrition from '@/assets/blog-nutrition.jpg';
import blogBg from '@/assets/blog-bg.jpg';

const blogPosts = [
  {
    id: 1,
    title: 'Protein Tozu Kullanımında Bilmeniz Gerekenler',
    excerpt: 'Protein tozu kullanımı hakkında merak ettiğiniz her şey. Doğru zamanlama, dozaj ve en etkili kullanım yöntemleri.',
    image: blogProtein,
    category: 'Beslenme',
    author: 'Ahmet Yılmaz',
    date: '15 Mart 2025',
    readTime: '5 dk',
  },
  {
    id: 2,
    title: 'Evde Spor İçin En İyi Ekipmanlar',
    excerpt: 'Evde etkili antrenmanlar için ihtiyacınız olan temel ekipmanlar ve kullanım önerileri.',
    image: blogEquipment,
    category: 'Ekipman',
    author: 'Zeynep Demir',
    date: '12 Mart 2025',
    readTime: '7 dk',
  },
  {
    id: 3,
    title: 'BCAA Nedir? Ne İşe Yarar?',
    excerpt: 'Dal zinciri amino asitleri (BCAA) hakkında bilmeniz gereken her şey ve kas gelişimine etkileri.',
    image: blogBcaa,
    category: 'Takviyeler',
    author: 'Mehmet Kaya',
    date: '10 Mart 2025',
    readTime: '6 dk',
  },
  {
    id: 4,
    title: 'Başlangıç Seviyesi İçin Fitness Programı',
    excerpt: 'Spora yeni başlayanlar için hazırlanmış kapsamlı 8 haftalık antrenman programı.',
    image: blogWorkout,
    category: 'Antrenman',
    author: 'Ayşe Yıldız',
    date: '8 Mart 2025',
    readTime: '10 dk',
  },
  {
    id: 5,
    title: 'Kreatin Kullanımı ve Faydaları',
    excerpt: 'Kreatin monohidrat kullanımının güç ve performans üzerindeki bilimsel olarak kanıtlanmış etkileri.',
    image: blogCreatine,
    category: 'Takviyeler',
    author: 'Can Öztürk',
    date: '5 Mart 2025',
    readTime: '8 dk',
  },
  {
    id: 6,
    title: 'Vücut Geliştirmede Beslenme İlkeleri',
    excerpt: 'Kas kütlesi artırmak ve yağ yakmak için uygulamanız gereken temel beslenme stratejileri.',
    image: blogNutrition,
    category: 'Beslenme',
    author: 'Ahmet Yılmaz',
    date: '3 Mart 2025',
    readTime: '12 dk',
  },
  {
    id: 7,
    title: 'Kardiyo mu Ağırlık mı? Hangisi Daha Etkili?',
    excerpt: 'Kardiyo ve ağırlık antrenmanlarının avantajlarını karşılaştırıyoruz. Hedeflerinize göre en iyi seçim.',
    image: blogWorkout,
    category: 'Antrenman',
    author: 'Zeynep Demir',
    date: '1 Mart 2025',
    readTime: '9 dk',
  },
  {
    id: 8,
    title: 'Omega-3 Takviyelerinin Faydaları',
    excerpt: 'Omega-3 yağ asitlerinin kalp sağlığı, beyin fonksiyonları ve inflamasyon üzerindeki etkileri.',
    image: blogBcaa,
    category: 'Takviyeler',
    author: 'Mehmet Kaya',
    date: '28 Şubat 2025',
    readTime: '7 dk',
  },
  {
    id: 9,
    title: 'Egzersiz Öncesi ve Sonrası Beslenme',
    excerpt: 'Antrenman performansınızı maksimize etmek için doğru zamanlama ve besin seçimi rehberi.',
    image: blogNutrition,
    category: 'Beslenme',
    author: 'Ahmet Yılmaz',
    date: '25 Şubat 2025',
    readTime: '8 dk',
  },
  {
    id: 10,
    title: 'Direnç Bantları ile Full Body Antrenman',
    excerpt: 'Direnç bantları kullanarak tüm vücudu çalıştıran etkili egzersizler ve program önerileri.',
    image: blogEquipment,
    category: 'Ekipman',
    author: 'Can Öztürk',
    date: '22 Şubat 2025',
    readTime: '11 dk',
  },
  {
    id: 11,
    title: 'Yüksek Proteinli Atıştırmalık Tarifleri',
    excerpt: 'Fitness hedeflerinize uygun, lezzetli ve kolay hazırlanan yüksek proteinli atıştırmalık fikirleri.',
    image: blogProtein,
    category: 'Beslenme',
    author: 'Ayşe Yıldız',
    date: '20 Şubat 2025',
    readTime: '6 dk',
  },
  {
    id: 12,
    title: 'Glutamin Takviyesi Gerçekten Gerekli mi?',
    excerpt: 'Glutaminin kas kütlesi, toparlanma ve bağışıklık sistemi üzerindeki bilimsel araştırmalar.',
    image: blogCreatine,
    category: 'Takviyeler',
    author: 'Mehmet Kaya',
    date: '18 Şubat 2025',
    readTime: '7 dk',
  },
  {
    id: 13,
    title: 'Funcitonal Training Nedir? Nasıl Yapılır?',
    excerpt: 'Günlük hayat hareketlerini geliştiren fonksiyonel antrenman teknikleri ve egzersizleri.',
    image: blogWorkout,
    category: 'Antrenman',
    author: 'Can Öztürk',
    date: '15 Şubat 2025',
    readTime: '10 dk',
  },
  {
    id: 14,
    title: 'Evde Yoga Pratiği İçin İpuçları',
    excerpt: 'Evde yoga yapmaya başlayanlar için temel pozlar, ekipman önerileri ve motivasyon taktikleri.',
    image: blogEquipment,
    category: 'Antrenman',
    author: 'Ayşe Yıldız',
    date: '12 Şubat 2025',
    readTime: '8 dk',
  },
  {
    id: 15,
    title: 'Makro Besin Hesaplama Rehberi',
    excerpt: 'Protein, karbonhidrat ve yağ ihtiyaçlarınızı hesaplayın. Hedeflerinize uygun makro dağılımı.',
    image: blogNutrition,
    category: 'Beslenme',
    author: 'Ahmet Yılmaz',
    date: '10 Şubat 2025',
    readTime: '9 dk',
  },
];

const categories = ['Tümü', 'Beslenme', 'Antrenman', 'Takviyeler', 'Ekipman'];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const sharePost = (platform: string, post: typeof blogPosts[0]) => {
    const url = `${window.location.origin}/blog/${post.id}`;
    const title = encodeURIComponent(post.title);
    const encodedUrl = encodeURIComponent(url);
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      whatsapp: `https://wa.me/?text=${title}%20${encodedUrl}`,
    };
    
    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
  };

  const filteredPosts = selectedCategory === 'Tümü' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="fixed inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `url(${blogBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="container-custom py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-foreground">ProMarkt</span>
          <span className="text-primary">7</span>
          <span className="text-foreground"> Blog</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Fitness, beslenme ve spor takviyeleri hakkında uzman içerikleri keşfedin.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={category === selectedCategory ? 'default' : 'outline'}
            className="rounded-full"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <Card className="mb-12 overflow-hidden hover-lift">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto">
              <img
                src={filteredPosts[0].image}
                alt={filteredPosts[0].title}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 left-4">Öne Çıkan</Badge>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary">{filteredPosts[0].category}</Badge>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {filteredPosts[0].date}
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4">{filteredPosts[0].title}</h2>
              <p className="text-muted-foreground mb-6">{filteredPosts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span>{filteredPosts[0].author}</span>
                  <span>•</span>
                  <span>{filteredPosts[0].readTime} okuma</span>
                </div>
                <Button>
                  Devamını Oku
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Share2 className="h-4 w-4" />
                  Paylaş:
                </span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => sharePost('facebook', filteredPosts[0])}
                  className="h-8 w-8 p-0"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => sharePost('twitter', filteredPosts[0])}
                  className="h-8 w-8 p-0"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => sharePost('linkedin', filteredPosts[0])}
                  className="h-8 w-8 p-0"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => sharePost('whatsapp', filteredPosts[0])}
                  className="h-8 w-8 p-0"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Blog Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.slice(1).map((post) => (
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
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <Button variant="ghost" size="sm">
                  Oku
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-2 pt-3 border-t">
                <span className="text-xs text-muted-foreground">Paylaş:</span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => sharePost('facebook', post)}
                  className="h-7 w-7 p-0"
                >
                  <Facebook className="h-3.5 w-3.5" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => sharePost('twitter', post)}
                  className="h-7 w-7 p-0"
                >
                  <Twitter className="h-3.5 w-3.5" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => sharePost('linkedin', post)}
                  className="h-7 w-7 p-0"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => sharePost('whatsapp', post)}
                  className="h-7 w-7 p-0"
                >
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
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
    </div>
  );
};

export default Blog;
