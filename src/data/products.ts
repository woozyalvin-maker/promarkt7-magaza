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
import olimpWheyComplexImg from '@/assets/product-olimp-whey-complex.jpg';
import olimpWheyComplexChocoImg from '@/assets/product-olimp-whey-complex-choco.jpg';
import kevinGoldCreatineImg from '@/assets/product-kevin-gold-creatine.jpg';
import kevinCreatineChewsImg from '@/assets/product-kevin-creatine-chews.jpg';
import kevinLegendaryMassImg from '@/assets/product-kevin-legendary-mass.jpg';
import kevinGoldTribulusImg from '@/assets/product-kevin-gold-tribulus.jpg';
import kevinGoldGlutamineImg from '@/assets/product-kevin-gold-glutamine.jpg';
import nutreverWheyIsolateImg from '@/assets/product-nutrever-whey-isolate.jpg';
import nutreverCarnitineImg from '@/assets/product-nutrever-carnitine.jpg';
import nutreverBcaaImg from '@/assets/product-nutrever-bcaa.jpg';
import nutreverAminoImg from '@/assets/product-nutrever-amino.jpg';
import nutreverCreatineImg from '@/assets/product-nutrever-creatine.jpg';
import nutreverProteinBarImg from '@/assets/product-nutrever-protein-bar.jpg';
import nutrendCreatineCreapureImg from '@/assets/product-nutrend-creatine-creapure.jpg';
import nutrendMicellarCaseinImg from '@/assets/product-nutrend-micellar-casein.jpg';
import nutrendCarnitine3000Img from '@/assets/product-nutrend-carnitine-3000.jpg';
import faIceBcaaImg from '@/assets/product-fa-ice-bcaa.jpg';

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
  },
  {
    id: '20',
    name: 'Whey Protein Complex 1800g - Çilek',
    brand: 'Olimp',
    category: 'Protein Tozları',
    price: 4800,
    image: olimpWheyComplexImg,
    rating: 4.9,
    reviewCount: 456,
    inStock: true,
    description: 'Ultimate Whey Protein Formula. Mikro-filtrasyon yöntemiyle üretilmiş whey protein. WPC ve WPI içeren kompleks formül.',
    features: [
      '25g protein per porsiyon',
      'WPC & WPI kombinasyonu',
      '5g BCAA per porsiyon',
      'Çilek aroması',
      '51 porsiyon - 1800g'
    ],
    nutritionFacts: {
      servingSize: '35g',
      servingsPerContainer: 51,
      calories: 135,
      protein: 25,
      carbs: 3,
      fat: 2
    },
    usage: 'Antrenman sonrası 1 ölçek (35g) 200-250ml su veya süt ile karıştırın.',
    variants: [
      {
        name: 'Aroma',
        options: ['Çilek', 'Çikolata', 'Vanilya']
      }
    ],
    isBestseller: true
  },
  {
    id: '21',
    name: 'Whey Protein Complex 1800g - Çikolata',
    brand: 'Olimp',
    category: 'Protein Tozları',
    price: 4800,
    image: olimpWheyComplexChocoImg,
    rating: 4.9,
    reviewCount: 432,
    inStock: true,
    description: 'Double Chocolate flavour whey protein kompleksi. WPC ve WPI içeren yüksek proteinli formül.',
    features: [
      '25g protein per porsiyon',
      'WPC & WPI kombinasyonu',
      'Yüksek kakao oranı',
      'Çikolata aroması',
      '48 porsiyon - 1800g'
    ],
    nutritionFacts: {
      servingSize: '37g',
      servingsPerContainer: 48,
      calories: 140,
      protein: 25,
      carbs: 4,
      fat: 3
    },
    usage: 'Antrenman sonrası 1 ölçek (37g) 200-250ml su veya süt ile karıştırın.',
    variants: [
      {
        name: 'Aroma',
        options: ['Çikolata']
      }
    ],
    isBestseller: true
  },
  {
    id: '22',
    name: 'Kevin Levrone Signature Series Gold Creatine 300g',
    brand: 'Kevin Lovren',
    category: 'Amino Asitler',
    price: 1340,
    image: kevinGoldCreatineImg,
    rating: 4.8,
    reviewCount: 89,
    inStock: true,
    description: 'Kevin Levrone imzalı Gold Line serisi kreatin monohidrat. Maksimum fiziksel güç ve performans için aromasız formül.',
    features: [
      'Saf kreatin monohidrat',
      'Maksimum güç artışı',
      'Aromasız - stack için ideal',
      '300g - 60 porsiyon',
      'Gold Line serisi'
    ],
    usage: 'Günde 1 ölçek (5g) bol suyla karıştırarak için.',
    isNew: true
  },
  {
    id: '23',
    name: 'Kevin Levrone Gold Creatine Chews Blue Raspberry 120 Tabs',
    brand: 'Kevin Lovren',
    category: 'Amino Asitler',
    price: 1340,
    image: kevinCreatineChewsImg,
    rating: 4.7,
    reviewCount: 72,
    inStock: true,
    description: 'Kevin Levrone Gold Line çiğnenebilir kreatin tablet. Blue Raspberry aromalı, pratik kullanım için ideal. Su ile karıştırmaya gerek yok.',
    features: [
      '5g kreatin per porsiyon',
      'Çiğnenebilir tablet formu',
      'Blue Raspberry aroması',
      '120 tablet',
      'Pratik kullanım - su gerektirmez'
    ],
    usage: 'Günde 4 tablet çiğneyerek alın.',
    isNew: true
  },
  {
    id: '24',
    name: 'Kevin Levrone Legendary Mass 3000g',
    brand: 'Kevin Lovren',
    category: 'Protein Tozları',
    price: 2800,
    image: kevinLegendaryMassImg,
    rating: 4.9,
    reviewCount: 156,
    inStock: true,
    description: 'Kevin Levrone Signature Series profesyonel kilo alma formülü. Multi-protein kompleks içeren legendary gainer. Kas kütlesi artışı için ideal.',
    features: [
      '80g protein per porsiyon',
      '272g karbonhidrat per porsiyon',
      '5 farklı protein kaynağı',
      'Çikolata aroması',
      '30 porsiyon - 3000g'
    ],
    nutritionFacts: {
      servingSize: '100g',
      servingsPerContainer: 30,
      calories: 380,
      protein: 80,
      carbs: 272,
      fat: 5
    },
    usage: 'Öğünler arası veya antrenman sonrası 1 ölçek (100g) 400-500ml su veya süt ile karıştırın.',
    variants: [
      {
        name: 'Aroma',
        options: ['Çikolata']
      }
    ],
    isBestseller: true
  },
  {
    id: '25',
    name: 'Kevin Levrone Gold Tribulus 90 Tablet',
    brand: 'Kevin Lovren',
    category: 'Vitaminler',
    price: 1340,
    image: kevinGoldTribulusImg,
    rating: 4.8,
    reviewCount: 89,
    inStock: true,
    description: 'Kevin Levrone Gold Tribulus, doğal testosteron seviyelerini desteklemek için formüle edilmiş güçlü bir takviye. Her tablette 200mg tribulus terrestris ekstraktı içerir.',
    features: [
      '200mg Tribulus Terrestris per tablet',
      '90 tablet - 3 aylık kullanım',
      'Doğal testosteron desteği',
      'Saponin içeriği yüksek',
      'Gold Line kalitesi'
    ],
    usage: 'Günde 3 tablet, yemeklerle birlikte alın.',
    isNew: true
  },
  {
    id: '26',
    name: 'Kevin Levrone Gold Glutamine 300g',
    brand: 'Kevin Lovren',
    category: 'Amino Asitler',
    price: 1520,
    image: kevinGoldGlutamineImg,
    rating: 4.9,
    reviewCount: 103,
    inStock: true,
    description: 'Kevin Levrone Signature Series Gold Line glutamin tozu. Aromasız, saf L-Glutamin. Kas toparlanması ve glikojen metabolizması için ideal. Protein metabolizmasını destekler.',
    features: [
      '5g saf L-Glutamin per porsiyon',
      'Aromasız - kolay karıştırma',
      '300g - 60 porsiyon',
      'Glikojen metabolizmasını destekler',
      'Protein metabolizması için ideal'
    ],
    usage: 'Günde 1-2 porsiyon (5-10g), protein shake veya içeceğinize karıştırarak alın.',
    isNew: true
  },
  {
    id: '27',
    name: 'Nutrever Whey Isolate Protein 1800g',
    brand: 'Nutrever',
    category: 'Protein Tozları',
    price: 4800,
    image: nutreverWheyIsolateImg,
    rating: 4.9,
    reviewCount: 245,
    inStock: true,
    description: 'Alman menşeli Nutrever Whey Isolate Protein. Yüksek kaliteli izole protein, instant WPI formülü. Düşük şeker içerir, çikolata aromalı. 1800g - 60 porsiyon.',
    features: [
      '25.2g protein per porsiyon',
      'Instant WPI formülü',
      'Düşük şeker içeriği',
      'Çikolata Dream aroması',
      'Alman menşeli - 1800g'
    ],
    nutritionFacts: {
      servingSize: '30g',
      servingsPerContainer: 60,
      calories: 115,
      protein: 25.2,
      carbs: 2,
      fat: 0.5
    },
    usage: 'Antrenman sonrası 1 ölçek (30g) 250ml su veya süt ile karıştırın.',
    variants: [
      {
        name: 'Aroma',
        options: ['Çikolata Dream']
      }
    ],
    isBestseller: true
  },
  {
    id: '28',
    name: 'L-Carnitine 3000 Liquid 20 Ampül',
    brand: 'Nutrever',
    category: 'Amino Asitler',
    price: 1300,
    image: nutreverCarnitineImg,
    rating: 4.8,
    reviewCount: 178,
    inStock: true,
    description: 'Alman menşeli Nutrever L-Carnitine 3000 Liquid. 20 ampül 60ml, yağ yakımı ve enerji üretimi için likit L-Carnitine formülü. Şekersiz, kromat, vitamin ve yeşil çay ekstraktı içerir.',
    features: [
      '3000mg L-Carnitine per ampül',
      'Likit form - hızlı emilim',
      '20 ampül x 60ml',
      'Şekersiz formül',
      'Kromat, vitamin ve yeşil çay ekstraktı'
    ],
    usage: 'Günde 1 ampül, tercihen antrenman öncesi veya sabah aç karnına için.',
    variants: [
      {
        name: 'Aroma',
        options: ['Peach (Şeftali)']
      }
    ],
    isNew: true
  },
  {
    id: '29',
    name: 'BCAA Powder 500g - Ice Tea Peach',
    brand: 'Nutrever',
    category: 'Amino Asitler',
    price: 975,
    image: nutreverBcaaImg,
    rating: 4.8,
    reviewCount: 194,
    inStock: true,
    description: 'Alman menşeli Nutrever BCAA Powder instant formül. 500g şeftali aromalı (Ice Tea Peach), 2:1:1 oranında BCAA içerir. Kas koruması ve toparlanma için ideal.',
    features: [
      '8g BCAA 2:1:1 oranı per porsiyon',
      'Instant formül - kolay çözülür',
      'Ice Tea Peach aroması',
      '500g - 50 porsiyon',
      'Alman menşeli kalite'
    ],
    usage: 'Antrenman öncesi veya sırasında 1 ölçek (10g) 300-400ml suya karıştırın.',
    variants: [
      {
        name: 'Aroma',
        options: ['Ice Tea Peach']
      }
    ],
    isNew: true
  },
  {
    id: '30',
    name: 'Whey Amino Xtreme Formula 300 Tablet',
    brand: 'Nutrever',
    category: 'Amino Asitler',
    price: 1500,
    image: nutreverAminoImg,
    rating: 4.9,
    reviewCount: 167,
    inStock: true,
    description: 'Alman menşeli Nutrever Whey Amino Xtreme Formula. 300 tablet amino asit kompleksi, B6 vitamini ve kalsiyum içerir. Kas yapımı ve toparlanma için ideal amino asit desteği.',
    features: [
      'Whey amino asit kompleksi',
      '300 tablet - uzun süreli kullanım',
      'B6 vitamini ile zenginleştirilmiş',
      'Kalsiyum içerir',
      'Xtreme Formula - yüksek konsantrasyon'
    ],
    usage: 'Günde 3-6 tablet, antrenman öncesi ve sonrası alın.',
    isNew: true
  },
  {
    id: '31',
    name: '% 100 Creatine Monohydrate Powder 500g',
    brand: 'Nutrever',
    category: 'Amino Asitler',
    price: 2700,
    image: nutreverCreatineImg,
    rating: 4.9,
    reviewCount: 223,
    inStock: true,
    description: 'Alman menşeli Nutrever %100 Creatine Monohydrate Powder. Ultra mikronize formül, 500g - 147 servis. Saf kreatin monohidrat, güç ve performans artışı için ideal.',
    features: [
      '3.4g kreatin monohidrat per porsiyon',
      '%100 saf kreatin',
      'Ultra mikronize formül',
      '500g - 147 servis',
      'Aromasız - kolay karıştırma'
    ],
    usage: 'Günde 1 ölçek (3.4g) bol suyla karıştırarak için.',
    isBestseller: true
  },
  {
    id: '32',
    name: 'Xtreme Protein Bar 50g - 24 Adet',
    brand: 'Nutrever',
    category: 'Protein Tozları',
    price: 3000,
    image: nutreverProteinBarImg,
    rating: 4.8,
    reviewCount: 189,
    inStock: true,
    description: 'Alman menşeli Nutrever Xtreme Protein Bar. 24 adet kutu, Toffee Chocolate aromalı. %50 protein, düşük şeker içeren pratik protein bar.',
    features: [
      '25g protein per bar',
      '%50 protein içeriği',
      'Düşük şeker',
      'Toffee Chocolate aroması',
      '24 adet kutu - 50g per bar'
    ],
    nutritionFacts: {
      servingSize: '50g',
      servingsPerContainer: 24,
      calories: 185,
      protein: 25,
      carbs: 8,
      fat: 6
    },
    usage: 'Öğünler arası veya antrenman sonrası pratik atıştırmalık olarak tüketin.',
    variants: [
      {
        name: 'Aroma',
        options: ['Toffee Chocolate']
      }
    ],
    isBestseller: true
  },
  {
    id: '33',
    name: 'Creatine Monohydrate Creapure 300g',
    brand: 'Nutrend',
    category: 'Amino Asitler',
    price: 1250,
    image: nutrendCreatineCreapureImg,
    rating: 4.9,
    reviewCount: 178,
    inStock: true,
    description: 'Nutrend Creatine Monohydrate Creapure. Premium kalite Creapure® sertifikalı kreatin monohidrat. Kas gücü ve performans artışı için mikronize formül.',
    features: [
      'Creapure® kalitesi - Alman sertifikalı',
      '5g saf kreatin monohidrat per porsiyon',
      'Mikronize formül - kolay emilim',
      '300g - 60 porsiyon',
      'Aromasız - her içeceğe karıştırılabilir'
    ],
    usage: 'Günde 1 ölçek (5g) 250ml su veya meyve suyu ile karıştırarak için.',
    isBestseller: true
  },
  {
    id: '34',
    name: 'Micellar Casein 900g',
    brand: 'Nutrend',
    category: 'Protein Tozları',
    price: 1800,
    image: nutrendMicellarCaseinImg,
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    description: 'Nutrend Micellar Casein - Yavaş emilen micellar kazein proteini. %92 MPI (Micellar Protein Isolate) içerir. Gece boyunca kas beslenmesi ve toparlanma için ideal. Chocolate + Cocoa aromalı.',
    features: [
      '23g protein per porsiyon',
      '%92 Micellar Casein (MPI)',
      '5.2g BCAA per porsiyon',
      'Yavaş salınım formülü (6-8 saat)',
      'Yüksek doğal kalsiyum içeriği',
      'Düşük şeker ve yağ',
      'Yapay renklendirici yok',
      'Lactowise teknolojisi',
      '900g - 30 porsiyon'
    ],
    nutritionFacts: {
      servingSize: '30g',
      servingsPerContainer: 30,
      calories: 115,
      protein: 23,
      carbs: 3,
      fat: 1
    },
    usage: 'Uyumadan önce veya uzun açlık periyotları için 1 ölçek (30g) 250-300ml su veya süt ile karıştırın.',
    variants: [
      {
        name: 'Aroma',
        options: ['Chocolate + Cocoa']
      }
    ],
    isNew: true
  },
  {
    id: '35',
    name: 'L-Carnitine 3000 Shot 20 Ampül',
    brand: 'Nutrend',
    category: 'Amino Asitler',
    price: 1400,
    image: nutrendCarnitine3000Img,
    rating: 4.8,
    reviewCount: 203,
    inStock: true,
    description: 'Nutrend L-Carnitine 3000 Shot - 20 ampül x 60ml portakal aromalı. Yağ yakımı ve enerji metabolizması için yüksek konsantrasyonlu L-Carnitine formülü. Krompikolinat ve 10 vitamin içerir.',
    features: [
      '3000mg L-Carnitine per ampül',
      '20 ampül x 60ml',
      'Portakal aroması',
      'Krompikolinat içerir',
      '10 vitamin ile zenginleştirilmiş',
      'Şekersiz formül',
      'Likit form - hızlı emilim',
      'Antrenman öncesi ideal'
    ],
    usage: 'Günde 1 ampül (60ml), tercihen antrenman öncesi 30 dakika önce veya sabah aç karnına tüketin.',
    variants: [
      {
        name: 'Aroma',
        options: ['Portakal']
      }
    ],
    isNew: true
  },
  {
    id: '36',
    name: 'ICE BCAA 375g',
    brand: 'FA Nutrition',
    category: 'Amino Asitler',
    price: 1250,
    image: faIceBcaaImg,
    rating: 4.7,
    reviewCount: 189,
    inStock: true,
    description: 'FA Nutrition ICE BCAA - Evercool Ice Effect teknolojisi ile serinletici etkili BCAA formülü. 7000mg BCAA, 2000mg L-Glutamine ve 1000mg Citrulline Malate içerir. Icy Citrus & Peach aroması.',
    features: [
      '7000mg BCAA per porsiyon',
      '2000mg L-Glutamine',
      '1000mg Citrulline Malate',
      'Evercool Ice Effect teknolojisi',
      'Serinletici etki',
      'Icy Citrus & Peach aroması',
      '375g net ağırlık',
      'Antrenman sırasında ideal'
    ],
    usage: 'Antrenman sırasında veya öncesinde 1 porsiyon (10g) 300ml suya karıştırarak tüketin.',
    variants: [
      {
        name: 'Aroma',
        options: ['Icy Citrus & Peach']
      }
    ],
    isNew: true
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
  'FA Nutrition',
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
