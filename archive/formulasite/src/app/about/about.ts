import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-wrapper">
      <!-- Animated Hero Section -->
      <div class="about-hero">
        <div class="hero-bg-animation"></div>
        <div class="container">
          <div class="hero-badge">
            <span class="badge-text">🏎️ FORMULA STUDENT TEAM</span>
          </div>
          <h1 class="hero-title">
            <span class="gradient-text">Geleceğin</span>
            <span class="outline-text">Mühendisleri</span>
          </h1>
          <p class="hero-subtitle">
            Hayalini gerçeğe dönüştürmek için çalışan bir ekip. 
            <span class="highlight">İki yıldır öğreniyor, geliştiriyor</span> 
            ve pistteki ilk günümüz için hazırlanıyoruz.
          </p>
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number">2</div>
              <div class="stat-label">Yıllık Deneyim</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <div class="stat-number">  2023</div>
              <div class="stat-label">Kuruluş Yılı</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <div class="stat-number">∞</div>
              <div class="stat-label">Motivasyon</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Story Timeline Section -->
      <section class="story-section">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">BİZİM HİKAYEMİZ</span>
            <h2 class="section-title">Yolculuğumuz</h2>
          </div>
          
          <div class="timeline">
            <div class="timeline-item" *ngFor="let item of timeline; let i = index">
              <div class="timeline-icon">{{item.icon}}</div>
              <div class="timeline-content">
                <h3>{{item.title}}</h3>
                <p>{{item.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission & Vision Cards -->
      <section class="mission-vision-section">
        <div class="container">
          <div class="cards-grid">
            <div class="info-card mission-card">
              <div class="card-glow"></div>
              <div class="card-icon">🎯</div>
              <h3>Misyonumuz</h3>
              <p>
                Mühendislik bilgisini pratikle birleştirerek yenilikçi çözümler üretmek. 
                Öğrenciler olarak öğrenirken takım çalışması ve proje yönetimi becerilerimizi geliştirmek. 
                Formula Student'dan edindiğimiz deneyimi geleceğe taşıyarak motor sporları kültürüne ve 
                mühendislik alanına katkı sağlamak.
              </p>
            </div>
            
            <div class="info-card vision-card">
              <div class="card-glow"></div>
              <div class="card-icon">🚀</div>
              <h3>Vizyonumuz</h3>
              <p>
                İlk yarış deneyimimizi kazanmak ve ulusal-uluslararası arenada rekabet eden bir 
                Formula Student takımı olmak. Sürdürülebilir teknolojilerle yenilikçi araçlar üretmek 
                ve Türk mühendis adaylarının dünya sahnesinde söz sahibi olmasını sağlamak.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Grid -->
      <section class="features-section">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">NELER YAPIYORUZ</span>
            <h2 class="section-title">Odak Noktalarımız</h2>
          </div>
          
          <div class="features-grid">
            <div class="feature-card" *ngFor="let feature of features">
              <div class="feature-icon-bg">
                <span class="feature-icon">{{feature.icon}}</span>
              </div>
              <h3>{{feature.title}}</h3>
              <p>{{feature.description}}</p>
              <div class="feature-hover-line"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Values -->
      <section class="values-section">
        <div class="container">
          <div class="values-content">
            <div class="values-text">
              <span class="section-badge">DEĞERLERİMİZ</span>
              <h2>Bizi Biz Yapan</h2>
              <p>
                1.5 Adana Formula olarak, sadece bir araç tasarlamıyoruz. 
                Aynı zamanda geleceğin mühendislerini yetiştiriyor, 
                takım ruhunu pekiştiriyor ve Türkiye'deki motor sporları 
                kültürüne katkıda bulunuyoruz.
              </p>
            </div>
            <div class="values-list">
              <div class="value-item" *ngFor="let value of values">
                <div class="value-check">✓</div>
                <span>{{value}}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="container">
          <div class="cta-content">
            <h2>Bizimle Yolculuğa Çık</h2>
            <p>Geleceğin teknolojilerini birlikte inşa edelim</p>
            <a href="/contact" class="cta-button">
              <span>İletişime Geç</span>
              <span class="button-arrow">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .about-wrapper {
      background: #0a0a0f;
      color: #ffffff;
      overflow-x: hidden;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* Hero Section */
    .about-hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 120px 20px 80px;
      overflow: hidden;
    }

    .hero-bg-animation {
      position: absolute;
      inset: 0;
      background: 
        radial-gradient(circle at 20% 50%, rgba(79, 70, 229, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
        linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%);
      animation: pulseGlow 8s ease-in-out infinite;
    }

    @keyframes pulseGlow {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.8; }
    }

    .hero-badge {
      text-align: center;
      margin-bottom: 30px;
      animation: slideDown 0.8s ease-out;
    }

    .badge-text {
      display: inline-block;
      padding: 12px 30px;
      background: rgba(79, 70, 229, 0.1);
      border: 1px solid rgba(79, 70, 229, 0.3);
      border-radius: 50px;
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 2px;
      color: #6366f1;
    }

    .hero-title {
      text-align: center;
      font-size: clamp(3rem, 8vw, 6rem);
      font-weight: 900;
      line-height: 1.1;
      margin-bottom: 30px;
      animation: slideUp 0.8s ease-out 0.2s both;
    }

    .gradient-text {
      display: block;
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .outline-text {
      display: block;
      color: transparent;
      -webkit-text-stroke: 2px #ffffff;
      text-stroke: 2px #ffffff;
    }

    .hero-subtitle {
      text-align: center;
      font-size: clamp(1.1rem, 2vw, 1.4rem);
      line-height: 1.8;
      color: #a0a0a0;
      max-width: 700px;
      margin: 0 auto 60px;
      animation: fadeIn 0.8s ease-out 0.4s both;
    }

    .highlight {
      color: #6366f1;
      font-weight: 600;
    }

    .hero-stats {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 40px;
      flex-wrap: wrap;
      animation: fadeIn 0.8s ease-out 0.6s both;
    }

    .stat-item {
      text-align: center;
    }

    .stat-number {
      font-size: 3rem;
      font-weight: 900;
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 5px;
    }

    .stat-label {
      font-size: 0.9rem;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .stat-divider {
      width: 1px;
      height: 50px;
      background: rgba(255, 255, 255, 0.1);
    }

    /* Section Header */
    .section-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .section-badge {
      display: inline-block;
      padding: 8px 20px;
      background: rgba(79, 70, 229, 0.1);
      border: 1px solid rgba(79, 70, 229, 0.3);
      border-radius: 50px;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 2px;
      color: #6366f1;
      margin-bottom: 20px;
    }

    .section-title {
      font-size: clamp(2.5rem, 5vw, 3.5rem);
      font-weight: 800;
      background: linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    /* Timeline Section */
    .story-section {
      padding: 120px 20px;
      background: linear-gradient(180deg, #0a0a0f 0%, #12121f 100%);
    }

    .timeline {
      display: grid;
      gap: 40px;
      max-width: 800px;
      margin: 0 auto;
    }

    .timeline-item {
      display: grid;
      grid-template-columns: 80px 1fr;
      gap: 30px;
      align-items: start;
      position: relative;
    }

    .timeline-item:not(:last-child)::after {
      content: '';
      position: absolute;
      left: 40px;
      top: 80px;
      width: 2px;
      height: calc(100% + 40px);
      background: linear-gradient(180deg, rgba(99, 102, 241, 0.5) 0%, transparent 100%);
    }

    .timeline-icon {
      width: 80px;
      height: 80px;
      background: rgba(79, 70, 229, 0.1);
      border: 2px solid rgba(79, 70, 229, 0.3);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      transition: all 0.3s ease;
    }

    .timeline-item:hover .timeline-icon {
      background: rgba(79, 70, 229, 0.2);
      transform: scale(1.1);
      box-shadow: 0 0 30px rgba(99, 102, 241, 0.4);
    }

    .timeline-content h3 {
      font-size: 1.5rem;
      color: #ffffff;
      margin-bottom: 10px;
    }

    .timeline-content p {
      color: #a0a0a0;
      line-height: 1.7;
    }

    /* Mission & Vision Section */
    .mission-vision-section {
      padding: 120px 20px;
      background: #0a0a0f;
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      gap: 40px;
    }

    .info-card {
      position: relative;
      padding: 50px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 30px;
      overflow: hidden;
      transition: all 0.4s ease;
    }

    .info-card:hover {
      transform: translateY(-10px);
      border-color: rgba(99, 102, 241, 0.5);
    }

    .card-glow {
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    .info-card:hover .card-glow {
      opacity: 1;
    }

    .card-icon {
      font-size: 3rem;
      margin-bottom: 20px;
    }

    .info-card h3 {
      font-size: 2rem;
      color: #ffffff;
      margin-bottom: 20px;
    }

    .info-card p {
      color: #a0a0a0;
      line-height: 1.8;
      font-size: 1.05rem;
    }

    /* Features Section */
    .features-section {
      padding: 120px 20px;
      background: linear-gradient(180deg, #0a0a0f 0%, #12121f 100%);
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
    }

    .feature-card {
      position: relative;
      padding: 40px 30px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      text-align: center;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .feature-card:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
    }

    .feature-icon-bg {
      width: 80px;
      height: 80px;
      margin: 0 auto 20px;
      background: linear-gradient(135deg, rgba(79, 70, 229, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }

    .feature-card:hover .feature-icon-bg {
      transform: rotate(5deg) scale(1.1);
    }

    .feature-icon {
      font-size: 2.5rem;
    }

    .feature-card h3 {
      font-size: 1.4rem;
      color: #ffffff;
      margin-bottom: 10px;
    }

    .feature-card p {
      color: #a0a0a0;
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .feature-hover-line {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 3px;
      background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
      transition: width 0.3s ease;
    }

    .feature-card:hover .feature-hover-line {
      width: 100%;
    }

    /* Values Section */
    .values-section {
      padding: 120px 20px;
      background: #0a0a0f;
    }

    .values-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }

    .values-text h2 {
      font-size: 3rem;
      color: #ffffff;
      margin: 20px 0;
      line-height: 1.2;
    }

    .values-text p {
      color: #a0a0a0;
      font-size: 1.1rem;
      line-height: 1.8;
    }

    .values-list {
      display: grid;
      gap: 20px;
    }

    .value-item {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 20px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 15px;
      transition: all 0.3s ease;
    }

    .value-item:hover {
      background: rgba(255, 255, 255, 0.05);
      transform: translateX(10px);
    }

    .value-check {
      width: 30px;
      height: 30px;
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      flex-shrink: 0;
    }

    .value-item span {
      color: #ffffff;
      font-size: 1.05rem;
    }

    /* CTA Section */
    .cta-section {
      padding: 120px 20px;
      background: linear-gradient(180deg, #0a0a0f 0%, #1a1a2e 100%);
      position: relative;
    }

    .cta-section::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
    }

    .cta-content {
      text-align: center;
      position: relative;
      z-index: 1;
    }

    .cta-content h2 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      color: #ffffff;
      margin-bottom: 20px;
    }

    .cta-content p {
      font-size: 1.3rem;
      color: #a0a0a0;
      margin-bottom: 40px;
    }

    .cta-button {
      padding: 20px 50px;
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      color: #ffffff;
      border: none;
      border-radius: 50px;
      font-size: 1.1rem;
      font-weight: 700;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 15px;
      transition: all 0.3s ease;
      text-decoration: none;
      box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
    }

    .cta-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 20px 40px rgba(99, 102, 241, 0.5);
    }

    .button-arrow {
      font-size: 1.5rem;
      transition: transform 0.3s ease;
    }

    .cta-button:hover .button-arrow {
      transform: translateX(5px);
    }

    /* Animations */
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* Responsive */
    @media (max-width: 968px) {
      .cards-grid {
        grid-template-columns: 1fr;
      }

      .values-content {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .hero-stats {
        gap: 20px;
      }

      .stat-divider {
        display: none;
      }
    }

    @media (max-width: 640px) {
      .timeline-item {
        grid-template-columns: 60px 1fr;
        gap: 20px;
      }

      .timeline-icon {
        width: 60px;
        height: 60px;
        font-size: 1.5rem;
      }

      .timeline-item:not(:last-child)::after {
        left: 30px;
        top: 60px;
      }

      .info-card {
        padding: 30px;
      }
    }
  `]
})
export class About {
  timeline = [
    {
      icon: '🎯',
      title: 'Ekim 2023 - Başlangıç',
      description: 'Motor sporlarına ve mühendisliğe tutkulu öğrenciler olarak bir araya geldik. Ortak hayalimiz: Formula Student sahnesinde Türkiye\'yi temsil etmek.'
    },
    {
      icon: '📚',
      title: 'Öğrenme Süreci',
      description: 'İki yıldır disiplinli bir şekilde eğitim alıyor, teknik bilgi birikimimizi artırıyoruz. Her gün yeni bir şey öğrenmek bizim için bir tutku.'
    },
    {
      icon: '🔧',
      title: 'Tasarım & Geliştirme',
      description: 'İlk aracımızın tasarımı üzerinde çalışıyoruz. Her detay, her hesaplama bizi hedefe bir adım daha yaklaştırıyor.'
    },
    {
      icon: '🏁',
      title: 'Gelecek Hedefler',
      description: 'İlk yarış deneyimimizi kazanmak için sabırsızlanıyoruz. Amacımız ulusal ve uluslararası arenada rekabet edebilir bir takım olmak.'
    }
  ];

  features = [
    {
      icon: '🎓',
      title: 'Sürekli Öğrenme',
      description: 'İki yıllık yoğun eğitim ve araştırma süreciyle kendimizi geliştiriyoruz'
    },
    {
      icon: '🔧',
      title: 'İnovatif Tasarım',
      description: 'Yenilikçi mühendislik çözümleriyle ilk aracımızı tasarlıyoruz'
    },
    {
      icon: '👥',
      title: 'Güçlü Takım',
      description: 'Ortak hedefler etrafında birleşmiş tutkulu bir öğrenci topluluğu'
    },
    {
      icon: '🎯',
      title: 'Net Hedefler',
      description: 'İlk yarışa hazırlanırken uzun vadeli vizyonumuzu koruyoruz'
    }
  ];

  values = [
    'Takım çalışması ve dayanışma',
    'Sürekli öğrenme ve gelişim',
    'Yenilikçilik ve problem çözme',
    'Disiplinli çalışma kültürü',
    'Sürdürülebilir mühendislik',
    'Türkiye\'yi temsil etme gururu'
  ];
}