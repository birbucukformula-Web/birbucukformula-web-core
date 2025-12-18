import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="hero-section">
      <div class="hero-background">
        <div class="hero-overlay"></div>
        <div class="particles" *ngIf="showParticles">
          <div class="particle" *ngFor="let particle of particles" 
               [style.left.%]="particle.x" 
               [style.top.%]="particle.y"
               [style.animation-delay.s]="particle.delay">
          </div>
        </div>
      </div>
      
      <div class="hero-content">
        <div class="hero-left">
          <div class="logo-showcase">
            <div class="team-logo" 
                 (mouseenter)="onLogoHover()" (mouseleave)="onLogoLeave()">
              <img 
                src="assets/logo.png" 
                alt="1.5 Adana Formula Takımı Logo" 
                class="logo-image"
                [class.hovered]="isLogoHovered"
                loading="lazy"
              />
              <div class="logo-glow"></div>
              <div class="logo-rings">
                <div class="ring ring-1"></div>
                <div class="ring ring-2"></div>
                <div class="ring ring-3"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="hero-right">
          <div class="hero-text">
            <span class="hero-subtitle">1.5 Adana Formula Takımı</span>
            <h1 class="hero-title">
              <span class="title-line">Geçmişin</span>
              <span class="title-line">İzinde</span>
              <span class="title-line accent">Geleceğin</span>
              <span class="title-line accent">Peşinde</span>
            </h1>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator" (click)="scrollToFeatures()">
        <span class="scroll-text">Geçmişin İzinde Geleceğin Peşinde</span>
      </div>
    </section>

    <section class="features-section">
      <div class="container">
        <div class="section-header">
          <h2>Neden 1.5 Formula Team?</h2>
          <p>Teknoloji, mühendislik ve tutku arasındaki mükemmel dengeyi keşfedin.</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card" *ngFor="let feature of features; let i = index"
               (mouseenter)="onFeatureHover(i)" (mouseleave)="onFeatureLeave(i)"
               [class.active]="hoveredFeature === i">
            <div class="feature-icon" [innerHTML]="feature.icon"></div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
            <div class="feature-overlay"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-background"></div>
      <div class="container">
        <div class="cta-content">
          <h2>Bizimle Yarışa Çık</h2>
          <p>1.5 Adana Formula Student Team'e katıl, geleceğin teknolojilerini bugünden öğren</p>
          <div class="cta-buttons">
            <a routerLink="/contact" class="btn btn-primary">
              İletişime Geç
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a routerLink="/team" class="btn btn-outline">
              Takımı İncele
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    * {
      pointer-events: auto;
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(50px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .particles {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      pointer-events: none;
    }

    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: linear-gradient(45deg, #00ffff, #22d3ee);
      border-radius: 50%;
      animation: float-particle 8s infinite linear;
      opacity: 0.7;
      pointer-events: none;
    }

    @keyframes float-particle {
      0% {
        transform: translateY(100vh) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 0.7;
      }
      90% {
        opacity: 0.7;
      }
      100% {
        transform: translateY(-100px) rotate(360deg);
        opacity: 0;
      }
    }

    .hero-section {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      overflow: hidden;
      padding: 0 5%;
    }

    .hero-content {
      display: grid;
      grid-template-columns: 45% 55%;
      gap: 4rem;
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
      align-items: center;
      position: relative;
      z-index: 10;
    }

    .hero-left {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .logo-showcase {
      position: relative;
      width: 500px;
      height: 500px;
    }

    .hero-right {
      display: flex;
      align-items: center;
    }

    .hero-text {
      text-align: left;
    }

    .hero-subtitle {
      display: inline-block;
      font-size: 1rem;
      font-weight: 500;
      color: #00ffff;
      letter-spacing: 3px;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
      opacity: 0.9;
    }

    .hero-title {
      font-size: 5rem;
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 2rem;
      color: #fff;
    }

    .title-line {
      display: block;
      margin-bottom: 0.5rem;
      background: linear-gradient(135deg, #fff 0%, #e0e0e0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: fadeInUp 0.8s ease forwards;
      opacity: 0;
    }

    .title-line:nth-child(1) { animation-delay: 0.1s; }
    .title-line:nth-child(2) { animation-delay: 0.2s; }
    .title-line:nth-child(3) { animation-delay: 0.3s; }
    .title-line:nth-child(4) { animation-delay: 0.4s; }

    .title-line.accent {
      background: linear-gradient(135deg, #00ffff 0%, #22d3ee 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: 0 0 40px rgba(0, 255, 255, 0.3);
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(ellipse at top left, rgba(0, 255, 255, 0.15) 0%, transparent 50%),
        radial-gradient(ellipse at bottom right, rgba(34, 211, 238, 0.1) 0%, transparent 50%),
        linear-gradient(135deg, #0a192f 0%, #112240 50%, #1a365d 100%);
      pointer-events: none;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(ellipse at center, transparent 0%, rgba(10, 25, 47, 0.2) 100%);
      pointer-events: none;
    }

    .team-logo {
      position: relative;
      width: 400px;
      height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
      border-radius: 50%;
    }

    .team-logo::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 380px;
      height: 380px;
      border-radius: 50%;
      background: radial-gradient(
        circle at center,
        rgba(255, 255, 255, 0.03) 0%,
        rgba(255, 255, 255, 0.01) 60%,
        transparent 100%
      );
      z-index: 1;
      pointer-events: none;
    }

    .logo-image {
      width: 280px;
      height: 280px;
      object-fit: contain;
      position: relative;
      z-index: 15;
      animation: float 6s ease-in-out infinite;
      transition: all 0.4s ease;
      border-radius: 50%;
      background: radial-gradient(
        circle at center,
        rgba(0, 255, 255, 0.15) 0%,
        rgba(0, 255, 255, 0.1) 40%,
        rgba(0, 255, 255, 0.05) 70%,
        rgba(0, 255, 255, 0.02) 90%,
        transparent 100%
      );
      padding: 30px;
      backdrop-filter: blur(10px);
      border: 2px solid transparent;
      background-clip: padding-box;
    }

    .logo-image:hover,
    .logo-image.hovered {
      transform: scale(1.15) rotateY(5deg);
      filter: drop-shadow(0 20px 40px rgba(0, 255, 255, 0.4));
      background: radial-gradient(
        circle at center,
        rgba(0, 255, 255, 0.25) 0%,
        rgba(0, 255, 255, 0.15) 40%,
        rgba(0, 255, 255, 0.1) 70%,
        rgba(0, 255, 255, 0.05) 85%,
        transparent 100%
      );
    }

    .logo-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 350px;
      height: 350px;
      background: radial-gradient(
        circle at center,
        rgba(0, 255, 255, 0.4) 0%,
        rgba(0, 255, 255, 0.3) 30%,
        rgba(34, 211, 238, 0.2) 50%,
        rgba(34, 211, 238, 0.1) 70%,
        rgba(0, 255, 255, 0.05) 85%,
        transparent 100%
      );
      border-radius: 50%;
      animation: pulse 4s ease-in-out infinite;
      z-index: 5;
      pointer-events: none;
    }

    .logo-rings {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      z-index: 1;
      pointer-events: none;
    }

    .ring {
      position: absolute;
      top: 50%;
      left: 50%;
      border: 2px solid rgba(0, 255, 255, 0.4);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }

    .ring-1 {
      width: 420px;
      height: 420px;
      animation: rotate 20s linear infinite;
      border-color: rgba(0, 255, 255, 0.6);
    }

    .ring-2 {
      width: 500px;
      height: 500px;
      animation: rotate-reverse 15s linear infinite;
      border-style: dashed;
      border-color: rgba(34, 211, 238, 0.4);
      border-width: 1px;
    }

    .ring-3 {
      width: 580px;
      height: 580px;
      animation: rotate 25s linear infinite;
      border-width: 1px;
      border-color: rgba(0, 255, 255, 0.2);
      opacity: 0.7;
    }

    @keyframes rotate {
      from { transform: translate(-50%, -50%) rotate(0deg); }
      to { transform: translate(-50%, -50%) rotate(360deg); }
    }

    @keyframes rotate-reverse {
      from { transform: translate(-50%, -50%) rotate(360deg); }
      to { transform: translate(-50%, -50%) rotate(0deg); }
    }

    @keyframes pulse {
      0%, 100% { 
        transform: translate(-50%, -50%) scale(1); 
        opacity: 1; 
      }
      50% { 
        transform: translate(-50%, -50%) scale(1.05); 
        opacity: 0.8; 
      }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
      z-index: 20;
    }

    .scroll-indicator:hover {
      transform: translateX(-50%) translateY(-5px);
    }

    .scroll-text {
      display: block;
      color: #a0a0a0;
      font-size: 0.9rem;
      margin-top: 0.5rem;
      opacity: 0.8;
    }

    .features-section {
      padding: 6rem 0;
      background: linear-gradient(180deg, #1a365d 0%, #112240 50%, #0a192f 100%);
      position: relative;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      position: relative;
      z-index: 5;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
      position: relative;
    }

    .section-header::before {
      content: '';
      position: absolute;
      top: -2rem;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 4px;
      background: linear-gradient(90deg, transparent, #00ffff, transparent);
      border-radius: 2px;
      pointer-events: none;
    }

    .section-header h2 {
      font-size: 3.5rem;
      font-weight: 800;
      background: linear-gradient(135deg, #ffffff 0%, #00ffff 50%, #22d3ee 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 1.5rem;
      letter-spacing: -1px;
      animation: fadeInUp 0.8s ease;
    }

    .section-header p {
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.75);
      max-width: 650px;
      margin: 0 auto;
      line-height: 1.6;
      animation: fadeInUp 0.8s ease 0.2s backwards;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .feature-card {
      background: rgba(17, 34, 64, 0.6);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(0, 255, 255, 0.2);
      border-radius: 20px;
      padding: 2.5rem;
      text-align: center;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
      cursor: pointer;
    }

    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1.5rem;
      filter: grayscale(0.3);
      transition: all 0.3s ease;
    }

    .feature-card h3 {
      font-size: 1.5rem;
      color: #fff;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .feature-card p {
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.6;
      font-size: 0.95rem;
    }

    .feature-overlay {
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.15), transparent);
      transition: left 0.6s ease;
      pointer-events: none;
    }

    .feature-card.active .feature-overlay {
      left: 100%;
    }

    .feature-card.active {
      transform: translateY(-10px);
      border-color: rgba(0, 255, 255, 0.6);
      box-shadow: 0 20px 40px rgba(0, 255, 255, 0.2);
      background: rgba(17, 34, 64, 0.9);
    }

    .feature-card.active .feature-icon {
      filter: grayscale(0);
      transform: scale(1.1);
    }

    .cta-section {
      padding: 6rem 2rem;
      position: relative;
      overflow: hidden;
      background: linear-gradient(180deg, #0a192f 0%, #1a365d 100%);
    }

    .cta-background {
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: 
        radial-gradient(circle at 30% 70%, rgba(0, 255, 255, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 70% 30%, rgba(34, 211, 238, 0.1) 0%, transparent 50%);
      animation: rotate-slow 30s linear infinite;
      pointer-events: none;
      z-index: 0;
    }

    .cta-content {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
      position: relative;
      z-index: 10;
    }

    @keyframes rotate-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .cta-content h2 {
      font-size: 3rem;
      font-weight: 700;
      background: linear-gradient(135deg, #fff 0%, #00ffff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 1.5rem;
    }

    .cta-content p {
      font-size: 1.3rem;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 3rem;
    }

    .cta-buttons {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
      position: relative;
      z-index: 100;
    }

    .btn {
      display: inline-flex !important;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      border-radius: 50px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
      font-size: 1rem;
      cursor: pointer !important;
      position: relative;
      z-index: 100;
      pointer-events: auto !important;
      user-select: none;
    }

    .btn-primary {
      background: linear-gradient(135deg, #00ffff 0%, #22d3ee 100%);
      color: #fff !important;
      box-shadow: 0 10px 30px rgba(0, 255, 255, 0.3);
    }

    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(0, 255, 255, 0.4);
    }

    .btn-outline {
      background: transparent;
      color: #fff !important;
      border: 2px solid rgba(0, 255, 255, 0.5);
    }

    .btn-outline:hover {
      background: rgba(0, 255, 255, 0.1);
      border-color: #00ffff;
      transform: translateY(-3px);
    }

    @media (max-width: 1024px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 3rem;
        text-align: center;
      }

      .hero-left {
        order: 1;
      }

      .hero-right {
        order: 2;
        justify-content: center;
      }

      .hero-text {
        text-align: center;
      }

      .hero-title {
        font-size: 3.5rem;
      }

      .logo-showcase {
        width: 400px;
        height: 400px;
      }

      .team-logo {
        width: 350px;
        height: 350px;
      }

      .logo-image {
        width: 220px;
        height: 220px;
      }
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }

      .logo-showcase {
        width: 300px;
        height: 300px;
      }

      .team-logo {
        width: 280px;
        height: 280px;
      }

      .logo-image {
        width: 180px;
        height: 180px;
        animation: none;
      }

      .ring, .ring-1, .ring-2, .ring-3 {
        display: none;
      }

      .logo-glow {
        animation: none;
        opacity: 0.5;
      }

      .hero-background,
      .cta-background {
        animation: none;
      }

      .logo-image,
      .feature-card {
        backdrop-filter: none;
      }

      .hero-background {
        background: linear-gradient(135deg, #0a192f 0%, #1a365d 100%);
      }

      .section-header h2 {
        font-size: 2rem;
      }

      .cta-content h2 {
        font-size: 2rem;
      }

      .features-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .particles {
        display: none;
      }

      .scroll-text {
        display: none;
      }

      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }

      .btn {
        width: 100%;
        max-width: 300px;
      }
    }

    @media (hover: none) {
      .team-logo:hover .logo-image {
        transform: none;
      }
      
      .team-logo:hover .logo-glow {
        animation: none;
      }
      
      .feature-card:hover {
        transform: none;
      }
    }
  `]
})
export class Home implements OnInit, AfterViewInit {
  isLogoHovered = false;
  showParticles = false;
  hoveredFeature = -1;
  particles: Array<{x: number, y: number, delay: number}> = [];

  features = [
    {
      icon: '🏎️',
      title: 'Performans Odaklı',
      description: 'En son teknoloji ile optimize edilmiş formula student araçları geliştiriyoruz.'
    },
    {
      icon: '⚙️',
      title: 'İleri Teknoloji',
      description: 'AI, IoT ve makine öğrenmesi teknolojilerini projelerimizde kullanıyor, gelecek nesil çözümler üretiyoruz.'
    },
    {
      icon: '🎯',
      title: 'Profesyonel Takım',
      description: 'Tutkulu öğrencilerden oluşan güçlü ekibimizle her projede mükemmelliği hedefliyoruz.'
    },
    {
      icon: '🚀',
      title: 'İnovasyon',
      description: 'Aktif AR-GE çalışmalarımızla kendimizi geliştiriyor, sınırları zorlayan projeler üretiyoruz.'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const isMobile = window.innerWidth <= 768;
      if (!isMobile) {
        this.generateParticles();
        this.showParticles = true;
      }
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initAnimations();
    }
  }

  onLogoHover() {
    this.isLogoHovered = true;
  }

  onLogoLeave() {
    this.isLogoHovered = false;
  }

  onFeatureHover(index: number) {
    this.hoveredFeature = index;
  }

  onFeatureLeave(index: number) {
    this.hoveredFeature = -1;
  }

  scrollToFeatures() {
    if (isPlatformBrowser(this.platformId)) {
      const featuresSection = document.querySelector('.features-section');
      featuresSection?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private generateParticles() {
    this.particles = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8
    }));
  }

  private initAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.feature-card, .timeline-item').forEach(el => {
      observer.observe(el);
    });
  }
}