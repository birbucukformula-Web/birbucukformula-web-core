import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Memory {
  id: number;
  title: string;
  date: string;
  year: string;
  image: string;
  description: string;
  category: string;
  location?: string;
}

@Component({
  selector: 'app-memories',
  templateUrl: './memories.html',
  styleUrls: ['./memories.css'],
  standalone: true,
  imports: [CommonModule]
})
export class Memories implements OnInit {
  title = 'Anılarımız';
  selectedCategory = 'all';
  currentSlideIndex = 0;
  slideInterval: any;
  
  heroSlides = [
    {
      image: 'assets/memories/hero1.jpg',
      title: '2025 Formula Student Yarışmasından Kareler',
      subtitle: 'Heyecan dolu yarış anlarımız'
    },
    {
      image: 'assets/memories/hero2.jpg',
      title: 'Yarışmaya Hazırlanırken',
      subtitle: 'Test sürüşleri ve son kontroller'
    },
    {
      image: 'assets/memories/hero3.jpg',
      title: 'Pisteki Performansımız',
      subtitle: 'Takım çalışması ve azim'
    },
    {
      image: 'assets/memories/hero4.jpg',
      title: 'Teknik İnceleme ve Testler',
      subtitle: 'Detaylı hazırlık süreci'
    },
    {
      image: 'assets/memories/hero5.jpg',
      title: 'Takım Ruhu',
      subtitle: 'Birlikte başardıklarımız'
    }
  ];
  
  categories = [
    { id: 'all', name: 'Tümü', icon: '🏁' },
    { id: 'race', name: 'Yarış Anları', icon: '🏆' },
    { id: 'preparation', name: 'Hazırlık', icon: '🔧' },
    { id: 'team', name: 'Takım', icon: '👥' },
    { id: 'technical', name: 'Teknik', icon: '⚙️' }
  ];

  memories: Memory[] = [
    {
      id: 1,
      title: 'İlk Yarışımız - Formula Student Germany',
      date: '15 Ağustos',
      year: '2023',
      image: 'assets/memories/race1.jpg',
      description: 'Takımımızın Formula Student Germany yarışındaki ilk büyük deneyimi. Heyecan, tutku ve başarı dolu unutulmaz anlar.',
      category: 'race',
      location: 'Hockenheimring, Almanya'
    },
    {
      id: 2,
      title: 'Şampiyonluk Kupası',
      date: '20 Eylül',
      year: '2023',
      image: 'assets/memories/celebration.jpg',
      description: 'Yoğun çalışmaların karşılığı olarak aldığımız şampiyonluk kupası ve takım olarak yaşadığımız mutluluk.',
      category: 'celebration',
      location: 'İstanbul'
    },
    {
      id: 3,
      title: 'İlk Aracımızın Montajı',
      date: '10 Mart',
      year: '2023',
      image: 'assets/memories/build1.jpg',
      description: 'Aylarca süren tasarım ve üretim sürecinin ardından ilk aracımızın montajını tamamladığımız özel gün.',
      category: 'build',
      location: 'Adana Atölye'
    },
    {
      id: 4,
      title: 'Takım Kampı 2023',
      date: '5 Haziran',
      year: '2023',
      image: 'assets/memories/team1.jpg',
      description: 'Takım ruhu ve motivasyonumuzu güçlendirdiğimiz, birbirimizi daha iyi tanıdığımız eğlenceli kamp günleri.',
      category: 'team',
      location: 'Çukurova'
    },
    {
      id: 5,
      title: 'Formula Student East Yarışı',
      date: '8 Temmuz',
      year: '2024',
      image: 'assets/memories/race2.jpg',
      description: 'İkinci büyük yarışımız ve aldığımız değerli tecrübeler. Rekor süremizle pistte harika bir performans sergiledik.',
      category: 'race',
      location: 'Macaristan'
    },
    {
      id: 6,
      title: 'Yeni Üyelerin Katılımı',
      date: '1 Ekim',
      year: '2024',
      image: 'assets/memories/team2.jpg',
      description: 'Takımımıza katılan yeni üyelerle birlikte daha güçlü bir aile olduk. Deneyim paylaşımı ve oryantasyon günü.',
      category: 'team',
      location: 'Üniversite Kampüsü'
    },
    {
      id: 7,
      title: 'Aerodinamik Test Günü',
      date: '14 Nisan',
      year: '2024',
      image: 'assets/memories/build2.jpg',
      description: 'Yeni aerodinamik paketi test ettiğimiz, CFD simülasyonlarının gerçek dünya sonuçlarıyla buluştuğu gün.',
      category: 'build',
      location: 'Test Tesisi'
    },
    {
      id: 8,
      title: 'Yılbaşı Kutlaması',
      date: '31 Aralık',
      year: '2023',
      image: 'assets/memories/celebration2.jpg',
      description: 'Yılın tüm zorluklarını ve başarılarını birlikte kutladığımız, gelecek sezonun planlarını yaptığımız özel gece.',
      category: 'celebration',
      location: 'Takım Merkezi'
    },
    {
      id: 9,
      title: 'Elektrik Sistemleri Workshop',
      date: '22 Şubat',
      year: '2024',
      image: 'assets/memories/build3.jpg',
      description: 'Elektrik ve elektronik sistemleri üzerine yoğun eğitim ve uygulama yaptığımız workshop günleri.',
      category: 'build',
      location: 'Atölye'
    }
  ];

  filteredMemories: Memory[] = [];

  ngOnInit() {
    this.filterMemories('all');
    this.startSlideshow();
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  startSlideshow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.heroSlides.length;
  }

  prevSlide() {
    this.currentSlideIndex = this.currentSlideIndex === 0 
      ? this.heroSlides.length - 1 
      : this.currentSlideIndex - 1;
  }

  goToSlide(index: number) {
    this.currentSlideIndex = index;
  }

  filterMemories(category: string) {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredMemories = this.memories;
    } else {
      this.filteredMemories = this.memories.filter(m => m.category === category);
    }
  }

  getMemoriesByYear(): { year: string; memories: Memory[] }[] {
    const groupedByYear = this.filteredMemories.reduce((acc, memory) => {
      const year = memory.year;
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(memory);
      return acc;
    }, {} as { [key: string]: Memory[] });

    return Object.keys(groupedByYear)
      .sort((a, b) => parseInt(b) - parseInt(a))
      .map(year => ({
        year,
        memories: groupedByYear[year]
      }));
  }

  getCategoryIcon(categoryId: string): string {
    return this.categories.find(c => c.id === categoryId)?.icon || '📌';
  }

  getCategoryName(categoryId: string): string {
    return this.categories.find(c => c.id === categoryId)?.name || 'Diğer';
  }
}