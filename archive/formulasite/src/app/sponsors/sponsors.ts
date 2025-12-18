import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Sponsor {
  name: string;
  logo: string;
  website: string;
  category: string;
}

@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="sponsors-hero">
      <div class="container">
        <h1>Sponsorlarımız</h1>
        <p>Hayallerimizi gerçeğe dönüştürme yolculuğumuzda yanımızda olan değerli destekçilerimiz.</p>
      </div>
    </div>
    
    <section class="sponsors-content">
      <div class="container">
        
        <!-- Platinum Sponsor -->
        <div class="sponsor-tier">
          <div class="tier-header">
            <span class="tier-badge platinum">Platinum Sponsor</span>
          </div>
          <div class="sponsors-wrapper platinum-wrapper">
            <a *ngFor="let sponsor of platinumSponsors" 
               [href]="sponsor.website" 
               target="_blank" 
               rel="noopener noreferrer"
               class="sponsor-pill platinum-pill"
               [title]="sponsor.name">
              <img [src]="sponsor.logo" [alt]="sponsor.name">
            </a>
          </div>
        </div>

        <!-- Gold Sponsors -->
        <div class="sponsor-tier">
          <div class="tier-header">
            <span class="tier-badge gold">Gold Sponsors</span>
          </div>
          <div class="sponsors-wrapper gold-wrapper">
            <a *ngFor="let sponsor of goldSponsors" 
               [href]="sponsor.website" 
               target="_blank" 
               rel="noopener noreferrer"
               class="sponsor-pill gold-pill"
               [title]="sponsor.name">
              <img [src]="sponsor.logo" [alt]="sponsor.name">
            </a>
          </div>
        </div>

        <!-- Silver Sponsors -->
        <div class="sponsor-tier">
          <div class="tier-header">
            <span class="tier-badge silver">Silver Sponsors</span>
          </div>
          <div class="sponsors-wrapper silver-wrapper">
            <a *ngFor="let sponsor of silverSponsors" 
               [href]="sponsor.website" 
               target="_blank" 
               rel="noopener noreferrer"
               class="sponsor-pill silver-pill"
               [title]="sponsor.name">
              <img [src]="sponsor.logo" [alt]="sponsor.name">
            </a>
          </div>
        </div>

        <!-- Destekçilerimiz -->
        <div class="sponsor-tier">
          <div class="tier-header">
            <span class="tier-badge bronze">Destekçilerimiz</span>
          </div>
          <div class="sponsors-wrapper bronze-wrapper">
            <a *ngFor="let sponsor of supporters" 
               [href]="sponsor.website" 
               target="_blank" 
               rel="noopener noreferrer"
               class="sponsor-pill bronze-pill"
               [title]="sponsor.name">
              <img [src]="sponsor.logo" [alt]="sponsor.name">
            </a>
          </div>
        </div>
        
        <!-- Sponsor Ol CTA -->
        <div class="sponsor-cta">
          <div class="cta-content">
            <div class="cta-icon">🤝</div>
            <h2>Sponsor Olmak İster misiniz?</h2>
            <p>1.5 Adana Formula takımının bir parçası olun. Geleceğin mühendislerini destekleyin, markanızı Formula Student dünyasında görünür kılın.</p>
            <a routerLink="/contact" class="btn btn-primary">
              <span>İletişime Geçin</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .sponsors-hero {
      padding: 120px 20px 80px;
      background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%);
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    
    .sponsors-hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 30% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 50%);
      pointer-events: none;
    }
    
    .container {
      max-width: 1400px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }
    
    .sponsors-hero h1 {
      font-size: 3.5rem;
      font-weight: 800;
      margin-bottom: 20px;
      background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: fadeInUp 0.8s ease;
    }
    
    .sponsors-hero p {
      font-size: 1.2rem;
      color: #a0a0a0;
      max-width: 700px;
      margin: 0 auto;
      line-height: 1.6;
      animation: fadeInUp 0.8s ease 0.2s backwards;
    }
    
    .sponsors-content {
      padding: 80px 20px;
      background: #0a0a15;
      min-height: 100vh;
    }
    
    .sponsor-tier {
      margin-bottom: 60px;
      animation: fadeInUp 0.8s ease backwards;
    }
    
    .tier-header {
      text-align: center;
      margin-bottom: 40px;
    }
    
    .tier-badge {
      display: inline-block;
      padding: 12px 32px;
      font-size: 1.1rem;
      font-weight: 700;
      border-radius: 50px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    
    .tier-badge.platinum {
      background: linear-gradient(135deg, #e5e5e5 0%, #ffffff 50%, #e5e5e5 100%);
      color: #1a1a2e;
      box-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
    }
    
    .tier-badge.gold {
      background: linear-gradient(135deg, #1e6ea3ff 0%, #4e6effff 50%rgba(30, 0, 255, 1)00 100%);
      color: #1a1a2e;
      box-shadow: 0 4px 20px rgba(255, 215, 0, 0.4);
    }
    
    .tier-badge.silver {
      background: linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 50%, #c0c0c0 100%);
      color: #1a1a2e;
      box-shadow: 0 4px 20px rgba(192, 192, 192, 0.4);
    }

    .tier-badge.bronze {
      background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
      color: #ffffff;
      box-shadow: 0 4px 20px rgba(255, 107, 53, 0.4);
    }
    
    .sponsors-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      align-items: center;
    }
    
    .platinum-wrapper {
      gap: 30px;
    }
    
    .gold-wrapper {
      gap: 25px;
    }
    
    .silver-wrapper {
      gap: 22px;
    }

    .bronze-wrapper {
      gap: 20px;
    }
    
    .sponsor-pill {
      background: #ffffff;
      border-radius: 60px;
      padding: 20px 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      cursor: pointer;
      text-decoration: none;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      min-width: 180px;
      height: 100px;
    }
    
    .platinum-pill {
      min-width: 300px;
      height: 140px;
      padding: 30px 60px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    
    .gold-pill {
      min-width: 240px;
      height: 120px;
      padding: 25px 50px;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
    }
    
    .silver-pill {
      min-width: 200px;
      height: 110px;
      padding: 22px 45px;
      box-shadow: 0 5px 18px rgba(0, 0, 0, 0.11);
    }

    .bronze-pill {
      min-width: 180px;
      height: 100px;
      padding: 20px 40px;
    }
    
    .sponsor-pill:hover {
      transform: translateY(-8px) scale(1.05);
      box-shadow: 0 12px 30px rgba(255, 107, 53, 0.25);
    }
    
    .sponsor-pill img {
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      object-fit: contain;
      transition: all 0.3s ease;
    }
    
    .sponsor-pill:hover img {
      transform: scale(1.1);
    }
    
    .sponsor-cta {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(30px);
      -webkit-backdrop-filter: blur(30px);
      border: 2px solid rgba(255, 107, 53, 0.2);
      border-radius: 35px;
      padding: 70px 50px;
      text-align: center;
      position: relative;
      overflow: hidden;
      margin-top: 80px;
    }
    
    .sponsor-cta::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 70%);
      pointer-events: none;
    }
    
    .cta-content {
      position: relative;
      z-index: 1;
    }
    
    .cta-icon {
      font-size: 4rem;
      margin-bottom: 20px;
      animation: float 3s ease-in-out infinite;
    }
    
    .sponsor-cta h2 {
      color: #ffffff;
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 20px;
      background: linear-gradient(135deg, #ffffff 0%, #ff6b35 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .sponsor-cta p {
      color: #a0a0a0;
      font-size: 1.15rem;
      line-height: 1.7;
      margin-bottom: 35px;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 18px 45px;
      border: none;
      border-radius: 50px;
      font-weight: 600;
      font-size: 1.1rem;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    
    .btn-primary {
      background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
      color: white;
      box-shadow: 0 8px 20px rgba(255, 107, 53, 0.4);
      border: 2px solid rgba(255, 107, 53, 0.5);
    }
    
    .btn-primary:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 12px 30px rgba(255, 107, 53, 0.6);
    }
    
    .btn-primary svg {
      transition: transform 0.3s ease;
      position: relative;
      z-index: 1;
    }
    
    .btn-primary span {
      position: relative;
      z-index: 1;
    }
    
    .btn-primary:hover svg {
      transform: translateX(5px);
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-15px);
      }
    }
    
    @media (max-width: 768px) {
      .sponsors-hero h1 {
        font-size: 2.5rem;
      }
      
      .sponsors-hero p {
        font-size: 1rem;
      }
      
      .sponsors-wrapper {
        gap: 15px;
      }
      
      .platinum-pill {
        min-width: 250px;
        height: 120px;
        padding: 25px 45px;
      }
      
      .gold-pill {
        min-width: 200px;
        height: 100px;
        padding: 20px 40px;
      }
      
      .silver-pill {
        min-width: 180px;
        height: 95px;
        padding: 20px 38px;
      }

      .bronze-pill {
        min-width: 160px;
        height: 90px;
        padding: 18px 35px;
      }
      
      .sponsor-cta {
        padding: 50px 30px;
      }
      
      .sponsor-cta h2 {
        font-size: 2rem;
      }
      
      .cta-icon {
        font-size: 3rem;
      }
    }
    
    @media (max-width: 480px) {
      .sponsors-hero {
        padding: 100px 20px 60px;
      }
      
      .sponsors-hero h1 {
        font-size: 2rem;
      }
      
      .tier-badge {
        font-size: 0.9rem;
        padding: 10px 24px;
      }
      
      .platinum-pill {
        min-width: 200px;
        height: 100px;
        padding: 20px 35px;
      }
      
      .gold-pill {
        min-width: 180px;
        height: 90px;
        padding: 18px 35px;
      }
      
      .silver-pill {
        min-width: 160px;
        height: 85px;
        padding: 17px 33px;
      }

      .bronze-pill {
        min-width: 150px;
        height: 80px;
        padding: 15px 30px;
      }
      
      .btn {
        padding: 14px 35px;
        font-size: 0.95rem;
      }
    }
  `]
})
export class Sponsors {
  platinumSponsors: Sponsor[] = [
    {
      name: 'Emre Makina',
      logo: 'assets/sponsors/emre-makina.png',
      website: 'https://www.emremakinasan.com.tr/',
      category: 'Platinum Sponsor'
    }
  ];

  goldSponsors: Sponsor[] = [
    {
      name: 'Balıkçı 1',
      logo: 'assets/sponsors/balikci1.png',
      website: 'https://www.balikci1.com/',
      category: 'Gold Sponsor'
    },
    {
      name: 'Bomak',
      logo: 'assets/sponsors/bomak.png',
      website: '#',
      category: 'Gold Sponsor'
    }
  ];

  silverSponsors: Sponsor[] = [
    {
      name: 'Numeys',
      logo: 'assets/sponsors/numeys.png',
      website: 'https://www.numesys.com.tr/',
      category: 'Silver Sponsor'
    },
    {
      name: 'Ansys',
      logo: 'assets/sponsors/ansys.png',
      website: 'https://www.ansys.com/',
      category: 'Silver Sponsor'
    },
    {
      name: 'Kordsa',
      logo: 'assets/sponsors/kordsa.png',
      website: 'https://kordsa.com/tr',
      category: 'Silver Sponsor'
    }
  ];

  supporters: Sponsor[] = [
    {
      name: 'Gençlik ve Spor Bakanlığı',
      logo: 'assets/sponsors/gsb.png',
      website: 'https://gsb.gov.tr/tr',
      category: 'Destekçi'
    },
    {
      name: 'İstanbul Filament',
      logo: 'assets/sponsors/istanbul filament.png',
      website: 'https://www.istanbulfilament.com/',
      category: 'Destekçi'
    },
    {
      name: 'KY Kırtasiye',
      logo: 'assets/sponsors/ky-kirtasiye.png',
      website: 'http://www.kykirtasiye.com/',
      category: 'Destekçi'
    },
    {
      name: 'Çıtır Döner',
      logo: 'assets/sponsors/citir-doner.png',
      website: 'https://www.instagram.com/citirdoner01/',
      category: 'Destekçi'
    },
    {
      name: 'Giriş Kırtasiye',
      logo: 'assets/sponsors/giris-kirtasiye.png',
      website: 'https://www.instagram.com/giris_kirtasiye/',
      category: 'Destekçi'
    },
    {
      name: 'Antochia Döner Türkmenbaşı',
      logo: 'assets/sponsors/antochia-doner.png',
      website: 'https://www.instagram.com/antiochia_doner_turkmenbasi/',
      category: 'Destekçi'
    },
    {
      name: 'Temsa',
      logo: 'assets/sponsors/temsa.png',
      website: 'https://www.temsa.com/tr/tr',
      category: 'Destekçi'
    }
  ];
}