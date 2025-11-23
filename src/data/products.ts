import { Product } from '@/types/product';
import wheyProteinImg from '@/assets/product-whey-protein.jpg';
import bcaaImg from '@/assets/product-bcaa.jpg';
import multivitaminImg from '@/assets/product-multivitamin.jpg';
import creatineImg from '@/assets/product-creatine.jpg';
import yogaMatImg from '@/assets/product-yoga-mat.jpg';
import resistanceBandsImg from '@/assets/product-resistance-bands.jpg';
import bigjoyCaffeineImg from '@/assets/product-bigjoy-caffeine.jpg';
import bigjoyCreatineGlutamineImg from '@/assets/product-bigjoy-creatine-glutamine.jpg';
import bigjoyBcaaProImg from '@/assets/product-bigjoy-bcaa-pro.jpg';
import bigjoyHydroPumpImg from '@/assets/product-bigjoy-hydro-pump.jpg';
import bigjoyBcaaRippedImg from '@/assets/product-bigjoy-bcaa-ripped.jpg';
import bigjoyCreaBigChewImg from '@/assets/product-bigjoy-creabig-chew.jpg';
import olimpBcaaXplodeImg from '@/assets/product-olimp-bcaa-xplode.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Whey Protein Isolate 2kg',
    brand: 'Optimum Nutrition',
    category: 'Protein Tozları',
    price: 899,
    originalPrice: 1299,
    discount: 31,
    image: wheyProteinImg,
    rating: 4.8,
    reviewCount: 342,
    inStock: true,
    description: 'Yüksek kaliteli whey protein isolate, kas gelişimi ve toparlanma için ideal. Her porsiyonda 28g protein.',
    features: [
      '28g protein per porsiyon',
      'Düşük karbonhidrat ve yağ',
      'Hızlı emilim',
      'Lezzetli çikolata aroması',
      'Orijinal ithal ürün'
    ],
    nutritionFacts: {
      servingSize: '30g',
      servingsPerContainer: 66,
      calories: 120,
      protein: 28,
      carbs: 2,
      fat: 1
    },
    usage: 'Antrenman sonrası 1 ölçek (30g) 250ml su veya süt ile karıştırın.',
    variants: [
      {
        name: 'Aroma',
        options: ['Çikolata', 'Vanilya', 'Çilek', 'Muzlu']
      }
    ],
    isBestseller: true
  },
  {
    id: '3',
    name: 'Multivitamin 60 Tablet',
    brand: 'Nutrever',
    category: 'Vitaminler',
    price: 199,
    originalPrice: 279,
    discount: 29,
    image: multivitaminImg,
    rating: 4.7,
    reviewCount: 445,
    inStock: true,
    description: 'Günlük vitamin ve mineral ihtiyacınızı karşılayan kapsamlı multivitamin desteği.',
    features: [
      '23 vitamin ve mineral',
      'Bağışıklık sistemi desteği',
      'Enerji metabolizması',
      '2 aylık kullanım',
      'Yüksek emilim'
    ],
    usage: 'Günde 1 tablet, yemekle birlikte alın.',
    isNew: true
  },
  {
    id: '4',
    name: 'Kreatin Monohidrat 500g',
    brand: 'Nutrend',
    category: 'Amino Asitler',
    price: 299,
    originalPrice: 399,
    discount: 25,
    image: creatineImg,
    rating: 4.9,
    reviewCount: 567,
    inStock: true,
    description: 'Saf kreatin monohidrat. Güç ve performans artışı için bilimsel olarak kanıtlanmış destek.',
    features: [
      '5g saf kreatin per porsiyon',
      'Creapure® kalitesi',
      'Aromasız',
      'Güç ve dayanıklılık artışı',
      '100 porsiyon'
    ],
    usage: 'Günde 5g, bol suyla karıştırarak için.',
    isBestseller: true
  },
  {
    id: '5',
    name: 'Yoga Matı Premium',
    brand: 'Kevin Lovren',
    category: 'Spor Ekipmanları',
    price: 249,
    originalPrice: 349,
    discount: 29,
    image: yogaMatImg,
    rating: 4.5,
    reviewCount: 123,
    inStock: true,
    description: 'Kaymaz, yüksek yoğunluklu yoga ve pilates matı. Konforlu ve dayanıklı.',
    features: [
      '10mm kalınlık',
      'Kaymaz yüzey',
      'Taşıma askısı hediye',
      '180cm x 60cm',
      'Kolay temizlenir'
    ],
    variants: [
      {
        name: 'Renk',
        options: ['Siyah/Turuncu', 'Mor', 'Mavi', 'Yeşil']
      }
    ]
  },
  {
    id: '6',
    name: 'Direnç Bandı Seti',
    brand: 'Sat Nutrition',
    category: 'Spor Ekipmanları',
    price: 179,
    originalPrice: 249,
    discount: 28,
    image: resistanceBandsImg,
    rating: 4.4,
    reviewCount: 89,
    inStock: true,
    description: '5 farklı direnç seviyesinde elastik band seti. Evde antrenman için ideal.',
    features: [
      '5 farklı direnç seviyesi',
      'Lateks malzeme',
      'Taşıma çantası dahil',
      'Kapı ankraj aparatı',
      'Kullanım kılavuzu'
    ],
    isNew: true
  },
  {
    id: '7',
    name: 'Kazein Protein 1kg',
    brand: 'Sygenix',
    category: 'Protein Tozları',
    price: 649,
    originalPrice: 849,
    discount: 24,
    image: wheyProteinImg,
    rating: 4.6,
    reviewCount: 156,
    inStock: true,
    description: 'Yavaş emilen kazein proteini. Gece boyunca kas beslenmesi için ideal.',
    features: [
      '24g protein per porsiyon',
      'Yavaş emilim (6-8 saat)',
      'Gece kullanımı için ideal',
      'Düşük şeker',
      'Kremamsı doku'
    ],
    variants: [
      {
        name: 'Aroma',
        options: ['Çikolata', 'Vanilya']
      }
    ]
  },
  {
    id: '8',
    name: 'Glutamin Powder 500g',
    brand: 'Muscle Pump',
    category: 'Amino Asitler',
    price: 329,
    originalPrice: 429,
    discount: 23,
    image: bcaaImg,
    rating: 4.5,
    reviewCount: 201,
    inStock: false,
    description: 'L-Glutamin tozu. Bağışıklık sistemi ve bağırsak sağlığı desteği.',
    features: [
      '5g L-Glutamin per porsiyon',
      'Saf ve aromasız',
      'Toparlanma desteği',
      'Bağışıklık güçlendirici',
      '100 porsiyon'
    ]
  },
  {
    id: '9',
    name: 'Omega-3 1000mg',
    brand: 'Bomb Series',
    category: 'Vitaminler',
    price: 249,
    originalPrice: 329,
    discount: 24,
    image: multivitaminImg,
    rating: 4.8,
    reviewCount: 378,
    inStock: true,
    description: 'Yüksek EPA ve DHA içeren omega-3 balık yağı kapsülleri.',
    features: [
      '1000mg balık yağı',
      '300mg EPA + 200mg DHA',
      'Kalp ve beyin sağlığı',
      '120 softgel',
      'Moleküler distile'
    ]
  },
  {
    id: '10',
    name: 'Pre-Workout Explosion',
    brand: 'Trec Nutrition',
    category: 'Amino Asitler',
    price: 399,
    originalPrice: 549,
    discount: 27,
    image: creatineImg,
    rating: 4.7,
    reviewCount: 289,
    inStock: true,
    description: 'Antrenman öncesi enerji ve performans artırıcı formül.',
    features: [
      'Beta-alanin ve kreatin',
      'Kafein ve arginin',
      'Enerji ve odaklanma',
      'Pump etkisi',
      '30 porsiyon'
    ],
    variants: [
      {
        name: 'Aroma',
        options: ['Meyve Punch', 'Yeşil Elma', 'Portakal']
      }
    ],
    isBestseller: true
  },
  {
    id: '11',
    name: 'Protein Bar 12li Paket',
    brand: 'Optimum Nutrition',
    category: 'Protein Tozları',
    price: 279,
    originalPrice: 349,
    discount: 20,
    image: wheyProteinImg,
    rating: 4.4,
    reviewCount: 167,
    inStock: true,
    description: 'Yüksek proteinli, düşük şekerli protein barları.',
    features: [
      '20g protein per bar',
      'Düşük şeker (1g)',
      'Lezzetli ve doyurucu',
      '12 adet kutu',
      'Pratik atıştırmalık'
    ],
    variants: [
      {
        name: 'Tat',
        options: ['Çikolata', 'Fıstık Ezmesi', 'Kurabiye']
      }
    ]
  },
  {
    id: '13',
    name: 'Caffeine Plus 100 Kapsül',
    brand: 'Bigjoy Sports',
    category: 'Amino Asitler',
    price: 450,
    image: bigjoyCaffeineImg,
    rating: 4.7,
    reviewCount: 143,
    inStock: true,
    description: 'Kafein ve taurin içeren performans artırıcı kapsüller. Enerji, odaklanma ve dayanıklılık için ideal destek.',
    features: [
      '200mg kafein per kapsül',
      '200mg taurin per kapsül',
      '100 kapsül',
      'Enerji ve odaklanma',
      'Antrenman öncesi ideal'
    ],
    usage: 'Antrenman öncesi 1 kapsül bol suyla alın.',
    isNew: true
  },
  {
    id: '14',
    name: 'Big2 Creatine + Glutamine',
    brand: 'Bigjoy Sports',
    category: 'Amino Asitler',
    price: 1150,
    image: bigjoyCreatineGlutamineImg,
    rating: 4.8,
    reviewCount: 287,
    inStock: true,
    description: 'Kreatin ve glutamin kombinasyonu. Güç, performans ve toparlanma için çift etki sağlar.',
    features: [
      '5000mg kreatin monohidrat',
      '5000mg L-glutamin',
      'Kas kütlesi ve güç artışı',
      'Hızlı toparlanma',
      '50 porsiyon'
    ],
    usage: 'Antrenman sonrası 1 ölçek (10g) 300ml suya karıştırın.',
    isBestseller: true
  },
  {
    id: '15',
    name: 'BCAA Pro Karpuz 400g',
    brand: 'Bigjoy Sports',
    category: 'Amino Asitler',
    price: 800,
    image: bigjoyBcaaProImg,
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    description: '4:1:1 oranında BCAA içeren profesyonel formül. Karpuz aromalı, antrenman sırasında kas koruması sağlar.',
    features: [
      '6000mg BCAA per porsiyon',
      '4:1:1 oranı (Leucine:Isoleucine:Valine)',
      'Karpuz aroması',
      '40 porsiyon',
      'Antrenman içi kullanım'
    ],
    usage: 'Antrenman öncesi veya sırasında 1 ölçek (10g) 400ml suya karıştırın.',
    isNew: true
  },
  {
    id: '16',
    name: 'Hydro Pump 180g',
    brand: 'Bigjoy Sports',
    category: 'Amino Asitler',
    price: 490,
    image: bigjoyHydroPumpImg,
    rating: 4.8,
    reviewCount: 198,
    inStock: true,
    description: 'Glikogen ve kreatin monohidrat içeren pump formülü. Antrenman sırasında kas hacmi ve dayanıklılık artışı sağlar.',
    features: [
      'Glikogen desteği',
      'Kreatin monohidrat',
      'Pump etkisi',
      'Kas hacmi artışı',
      '20 porsiyon'
    ],
    usage: 'Antrenman öncesi 1 ölçek (9g) 250ml suya karıştırın.',
    isBestseller: true
  },
  {
    id: '17',
    name: 'BCAA Pro 4:1:1 Ripped 864g',
    brand: 'Bigjoy Sports',
    category: 'Amino Asitler',
    price: 1500,
    image: bigjoyBcaaRippedImg,
    rating: 4.9,
    reviewCount: 234,
    inStock: true,
    description: 'Pre/Intra workout RIPPED formülü. 4:1:1 BCAA ile L-Carnitine, taurin, kafein ve CLA içerir. Enerji ve yağ yakım desteği sağlar.',
    features: [
      '6000mg BCAA 4:1:1 oranı',
      'L-Carnitine ve CLA',
      'Kafein ve taurin',
      'Ananas aroması',
      '72 porsiyon - 864g'
    ],
    usage: 'Antrenman öncesi veya sırasında 1 ölçek (12g) 400ml suya karıştırın.',
    isBestseller: true
  },
  {
    id: '18',
    name: 'CreaBig CHEW (Çiğnenebilir Kreatin Tablet)',
    brand: 'Bigjoy Sports',
    category: 'Amino Asitler',
    price: 650,
    image: bigjoyCreaBigChewImg,
    rating: 4.7,
    reviewCount: 167,
    inStock: true,
    description: 'Çiğnenebilir kreatin tablet. 5000mg kreatin monohidrat içerir, pratik kullanım için ideal. Kiraz aromalı.',
    features: [
      '5000mg kreatin monohidrat per porsiyon',
      'Çiğnenebilir tablet formu',
      'Kiraz aroması',
      '120 tablet - 30 porsiyon',
      'Su ile karıştırmaya gerek yok'
    ],
    usage: 'Günde 4 tablet çiğneyerek alın.',
    isNew: true
  },
  {
    id: '19',
    name: 'BCAA Xplode 500G - Ananas',
    brand: 'Olimp',
    category: 'Amino Asitler',
    price: 1950,
    image: olimpBcaaXplodeImg,
    rating: 4.8,
    reviewCount: 312,
    inStock: true,
    description: 'BCAA Xplode Powder. Amino asitler ve anti-yorgunluk formülü (Vitamin B6). 2:1:1 oranında BCAA içerir.',
    features: [
      '6000mg BCAA 2:1:1 oranı',
      'Vitamin B6 içerir',
      'Anti-yorgunluk formülü',
      'Ananas aroması',
      '500g - 40 porsiyon'
    ],
    usage: 'Antrenman öncesi veya sırasında 1 ölçek (12.5g) 200ml suya karıştırın.',
    isBestseller: true
  }
];

export const categories = [
  { name: 'Protein Tozları', icon: '💪', count: 45 },
  { name: 'Amino Asitler', icon: '⚡', count: 32 },
  { name: 'Vitaminler', icon: '🌿', count: 28 },
  { name: 'Spor Ekipmanları', icon: '🏋️', count: 56 },
  { name: 'Spor Giyim', icon: '👕', count: 38 },
  { name: 'Aksesuarlar', icon: '🎒', count: 24 }
];

export const brands = [
  'Bigjoy Sports',
  'Bomb Series',
  'Kevin Lovren',
  'Muscle Pump',
  'Nutrend',
  'Nutrever',
  'Olimp',
  'Optimum Nutrition',
  'Sat Nutrition',
  'Sygenix',
  'Trec Nutrition'
];
