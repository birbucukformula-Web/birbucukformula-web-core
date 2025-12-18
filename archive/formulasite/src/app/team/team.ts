import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="team-hero">
      <div class="container">
        <h1>Takımımız</h1>
        <p>Başarılarımızın arkasındaki yetenekli ekibimizle tanışın.</p>
      </div>
    </div>
    
    <section class="team-content">
      <div class="container">
        <!-- Takım Kaptanı -->
        <div class="captain-section">
          <h2 class="section-title">
            <span class="title-icon">👑</span>
            Takım Kaptanı
          </h2>
          <div class="captain-card-container">
            <div class="member-card captain-card">
              <div class="member-avatar captain-avatar">
                <img 
                  *ngIf="getCaptain().photo && !getCaptain().showInitials" 
                  [src]="getCaptain().photo" 
                  [alt]="getCaptain().name"
                  class="avatar-img"
                  (error)="onImageError($event)"
                />
                <span *ngIf="!getCaptain().photo || getCaptain().showInitials" class="avatar-initials">
                  {{ getCaptain().initials }}
                </span>
              </div>
              <div class="member-info">
                <h3>{{ getCaptain().name }}</h3>
                <p class="member-role captain-role">{{ getCaptain().role }}</p>
                <p class="member-description">{{ getCaptain().description }}</p>
                <a 
                  *ngIf="getCaptain().linkedin" 
                  [href]="getCaptain().linkedin" 
                  target="_blank" 
                  class="linkedin-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Yazılım Birimi -->
        <div class="unit-section">
          <h2 class="section-title">
            <span class="title-icon">💻</span>
            Yazılım Birimi
          </h2>
          <div class="team-grid">
            <div class="member-card leader-card" *ngFor="let member of getSoftwareTeam()">
              <div class="member-avatar" [class.leader-avatar]="member.isLeader">
                <img 
                  *ngIf="member.photo && !member.showInitials" 
                  [src]="member.photo" 
                  [alt]="member.name"
                  class="avatar-img"
                  (error)="onImageError($event)"
                />
                <span *ngIf="!member.photo || member.showInitials" class="avatar-initials">
                  {{ member.initials }}
                </span>
              </div>
              <h3>{{ member.name }}</h3>
              <p class="member-role" [class.leader-role]="member.isLeader">{{ member.role }}</p>
              <p class="member-description">{{ member.description }}</p>
              <a 
                *ngIf="member.linkedin" 
                [href]="member.linkedin" 
                target="_blank" 
                class="linkedin-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <!-- Mekanik Birimi -->
        <div class="unit-section">
          <h2 class="section-title">
            <span class="title-icon">🔧</span>
            Mekanik Birimi
          </h2>
          <div class="team-grid">
            <div class="member-card" *ngFor="let member of getMechanicalTeam()">
              <div class="member-avatar" [class.leader-avatar]="member.isLeader">
                <img 
                  *ngIf="member.photo && !member.showInitials" 
                  [src]="member.photo" 
                  [alt]="member.name"
                  class="avatar-img"
                  (error)="onImageError($event)"
                />
                <span *ngIf="!member.photo || member.showInitials" class="avatar-initials">
                  {{ member.initials }}
                </span>
              </div>
              <h3>{{ member.name }}</h3>
              <p class="member-role" [class.leader-role]="member.isLeader">{{ member.role }}</p>
              <p class="member-description">{{ member.description }}</p>
              <a 
                *ngIf="member.linkedin" 
                [href]="member.linkedin" 
                target="_blank" 
                class="linkedin-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .team-hero {
      padding: 120px 20px 80px;
      background: linear-gradient(135deg, #0a192f 0%, #112240 50%, #1a365d 100%);
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .team-hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 50%, rgba(34, 211, 238, 0.1) 0%, transparent 50%);
    }

    .team-hero .container {
      position: relative;
      z-index: 1;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .team-hero h1 {
      font-size: 3.5rem;
      font-weight: 800;
      margin-bottom: 20px;
      background: linear-gradient(135deg, #00ffff 0%, #22d3ee 50%, #06b6d4 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: shimmer 3s ease-in-out infinite;
    }

    @keyframes shimmer {
      0%, 100% { filter: brightness(1); }
      50% { filter: brightness(1.2); }
    }

    .team-hero p {
      font-size: 1.3rem;
      color: #e8e8e8;
      font-weight: 500;
      line-height: 1.6;
    }
    
    .team-content {
      padding: 80px 20px;
      background: linear-gradient(135deg, #0a192f 0%, #0f1419 100%);
    }

    .section-title {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 2.5rem;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 3rem;
      text-align: center;
      justify-content: center;
    }

    .title-icon {
      font-size: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Takım Kaptanı Özel Tasarım */
    .captain-section {
      margin-bottom: 5rem;
    }

    .captain-card {
      display: flex;
      align-items: center;
      gap: 3rem;
      background: linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(14, 165, 233, 0.05) 100%);
      backdrop-filter: blur(20px);
      border: 2px solid rgba(0, 255, 255, 0.3);
      border-radius: 25px;
      padding: 3rem;
      max-width: 800px;
      margin: 0 auto;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .captain-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent);
      transition: left 0.5s ease;
    }

    .captain-card:hover::before {
      left: 100%;
    }

    .captain-card:hover {
      transform: translateY(-5px);
      background: linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(14, 165, 233, 0.1) 100%);
      box-shadow: 0 25px 50px rgba(0, 255, 255, 0.2);
      border-color: rgba(0, 255, 255, 0.5);
    }

    .captain-avatar {
      width: 120px !important;
      height: 120px !important;
      font-size: 2.5rem !important;
      background: linear-gradient(135deg, #00ffff 0%, #22d3ee 50%, #06b6d4 100%);
      border: 3px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 15px 30px rgba(0, 255, 255, 0.4);
    }

    .captain-avatar .avatar-initials {
      font-size: 2.5rem !important;
    }

    .member-info {
      flex: 1;
      text-align: left;
    }

    .captain-role {
      color: #00ffff !important;
      font-size: 1.3rem !important;
      font-weight: 700 !important;
    }

    /* Birim Bölümleri */
    .unit-section {
      margin-bottom: 5rem;
    }
    
    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }
    
    .member-card {
      background: rgba(17, 34, 64, 0.4);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(0, 255, 255, 0.1);
      border-radius: 20px;
      padding: 2rem;
      text-align: center;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .member-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, #00ffff, #22d3ee, #06b6d4);
      transition: left 0.5s ease;
    }
    
    .member-card:hover {
      transform: translateY(-10px);
      background: rgba(17, 34, 64, 0.6);
      box-shadow: 0 20px 40px rgba(0, 255, 255, 0.2);
      border-color: rgba(0, 255, 255, 0.3);
    }

    .member-card:hover::before {
      left: 0;
    }

    /* Lider Kartları Özel Stil */
    .leader-card {
      border: 2px solid rgba(0, 255, 255, 0.25);
      background: rgba(17, 34, 64, 0.5);
    }

    .leader-card:hover {
      background: rgba(17, 34, 64, 0.7);
      border-color: rgba(0, 255, 255, 0.4);
    }
    
    .member-avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: rgba(0, 255, 255, 0.1);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 700;
      margin: 0 auto 1.5rem;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .avatar-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }

    .avatar-initials {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.5rem;
      font-weight: 700;
      color: white;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .leader-avatar {
      background: linear-gradient(135deg, #00ffff 0%, #22d3ee 50%, #06b6d4 100%);
      box-shadow: 0 8px 20px rgba(0, 255, 255, 0.3);
    }
    
    .member-card h3 {
      color: #ffffff;
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
      font-weight: 700;
    }
    
    .member-role {
      color: #a0a0a0;
      font-weight: 600;
      margin-bottom: 1rem;
      font-size: 1rem;
    }

    .leader-role {
      color: #00ffff !important;
      font-weight: 700 !important;
    }
    
    .member-description {
      color: #888;
      font-size: 0.9rem;
      line-height: 1.5;
      margin-bottom: 1.5rem;
    }

    /* LinkedIn Button */
    .linkedin-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.7rem 1.2rem;
      background: linear-gradient(135deg, #0077b5 0%, #005885 100%);
      color: white;
      text-decoration: none;
      border-radius: 25px;
      font-size: 0.9rem;
      font-weight: 600;
      transition: all 0.3s ease;
      border: 2px solid transparent;
    }

    .linkedin-btn:hover {
      background: linear-gradient(135deg, #005885 0%, #003d5c 100%);
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 119, 181, 0.4);
      border-color: rgba(0, 255, 255, 0.3);
    }

    /* Responsive */
    @media (max-width: 768px) {
      .team-hero h1 {
        font-size: 2.5rem;
      }
      
      .team-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .captain-card {
        flex-direction: column;
        text-align: center;
        gap: 2rem;
        padding: 2rem;
      }

      .member-info {
        text-align: center;
      }

      .section-title {
        font-size: 2rem;
        flex-direction: column;
        gap: 0.5rem;
      }
    }

    @media (max-width: 480px) {
      .member-card {
        padding: 1.5rem;
      }

      .captain-card {
        padding: 1.5rem;
      }

      .captain-avatar {
        width: 100px !important;
        height: 100px !important;
        font-size: 2rem !important;
      }
    }
  `]
})
export class Team {
  private teamMembers = [
    // Takım Kaptanı
    {
     name: 'Ahmet Göksel Durmaz',
      role: 'Takım Kaptanı',
      description: 'Takımımızın Kaptanı ve lideri.',
      initials: 'GD',
      photo: 'assets/team/goksel-durmaz.jpg',
      linkedin: 'https://www.linkedin.com/in/ahmet-g%C3%B6ksel-durmaz-aa5a90231/',
      isCaptain: true,
      showInitials: false
    },
    // Yazılım Birimi
    {
      name: 'Mustafa Gülsoy',
      role: 'Yazılım Birimi Kaptanı',
      description: 'Yazılım geliştirme süreçlerinin lideri ve teknoloji uzmanı.',
      initials: 'MG',
      photo: 'assets/team/mustafa-gulsoy.jpg',
      linkedin: 'https://linkedin.com/in/mustafa-gulsoy',
      unit: 'software',
      isLeader: true,
      showInitials: false
    },
    {
      name: 'Mehmet Emin Akgül',
      role: 'Yazılımcı',
      description: 'Full-stack geliştirici, yazılım üyesi.',
      initials: 'MEA',
      photo: 'assets/team/memin.jpg',
      linkedin: 'https://linkedin.com/in/mehmet-emin-akgul',
      unit: 'software',
      showInitials: false
    },
    // Mekanik Birimi
    {
      name: 'Mustafa Çetinöz',
      role: 'Mekanik Birimi Kaptanı',
      description: 'Mekanik tasarım ve üretim süreçlerinin sorumlusu.',
      initials: 'MÇ',
      photo: 'assets/team/mustafa-cetinoz.jpg',
      linkedin: 'https://linkedin.com/in/mustafa-cetinoz',
      unit: 'mechanical',
      isLeader: true,
      showInitials: false
    },
    {
      name: 'Emir Mert Akar',
      role: 'Mekanik Birimi Üyesi',
      description: 'Aktarma ve Süspansiyon birimi.',
      initials: 'EM',
      photo: 'assets/team/emir-mert.jpg',
      linkedin: 'https://www.linkedin.com/in/emir-mert-akar-a81450253/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      unit: 'mechanical',
      showInitials: false
    },
    {
      name: 'Kerem Kanar',
      role: 'Mekanik Birimi Üyesi',
      description: 'Tasarım ve Analiz Birimi',
      initials: 'KK',
      photo: 'assets/team/kerem-kanar.jpg',
      linkedin: 'https://www.linkedin.com/in/kerem-kanar-baa49733b/',
      unit: 'mechanical',
      showInitials: false
    },
    {
      name: 'Kayra Kurt',
      role: 'Mekanik Birimi Üyesi',
      description: 'Aerodinami ve CFD Birimi',
      initials: 'KK',
      photo: 'assets/team/kayra-kurt.jpg',
      linkedin: 'https://www.linkedin.com/in/kayra-kurt-9572a6268/',
      unit: 'mechanical',
      showInitials: false
    },
    {
    

      name: 'Damla Bengisu Konuksever',
      role: 'Mekanik Birimi Üyesi',
      description: '',
      initials: 'DBK',
      photo: 'assets/team/damla-bengisu-konuksever.jpg',
      linkedin: 'https://www.linkedin.com/in/damla-bengisu-konuksever-531817224/',
      unit: 'mechanical',
      showInitials: false
    },
    {
      name: 'Mustafa Mert Abbak',
      role: 'Mekanik Birimi Üyesi',
      description: 'Süspansiyon sistemleri ve handling birimi',
      initials: 'MA',
      photo: 'assets/team/mert-abbak.jpg',
      linkedin: 'https://www.linkedin.com/in/mustafa-mert-abbak-964627363/',
      unit: 'mechanical',
      showInitials: false
    },
    {
      name: 'Alp Kağan Manga',
      role: 'Mekanik Birimi Üyesi',
      description: 'Direksiyon ve Ön Düzen Birimi',
      initials: 'AM',
      photo: 'assets/team/alp-manga.jpg',
      linkedin: 'https://www.linkedin.com/in/alp-ka%C4%9Fan-manga-aa3023335/',
      unit: 'mechanical',
      showInitials: false
    },
    {
      name: 'Mehmet Şevki Kaya',
      role: 'Mekanik Birimi Üyesi',
      description: 'Kompozit üretim ve tasarım birimi.',
      initials: 'FŞK',
      photo: 'assets/team/sevki-kaya.jpg',
      linkedin: 'https://www.linkedin.com/in/mehmet-%C5%9Fevki-kaya-47286a32b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      unit: 'mechanical',
      showInitials: false
    },
    {
      name: 'İbrahim Ahmet Tunç',
      role: 'Mekanik Birimi Üyesi',
      description: 'Kompozit Birimi',
      initials: 'İAT',
      photo: 'assets/team/tunc.jpg',
      linkedin: 'https://www.linkedin.com/in/ibrahim-ahmet-tun%C3%A7-8b1203252/',
      unit: 'mechanical',
      showInitials: false
    }
  ];

  getCaptain() {
    return this.teamMembers.find(member => member.isCaptain)!;
  }

  getSoftwareTeam() {
    return this.teamMembers.filter(member => member.unit === 'software');
  }

  getMechanicalTeam() {
    return this.teamMembers.filter(member => member.unit === 'mechanical');
  }

  onImageError(event: any) {
    const img = event.target;
    img.style.display = 'none';
    
    const avatar = img.closest('.member-avatar');
    if (avatar) {
      const initials = avatar.querySelector('.avatar-initials');
      if (initials) {
        initials.style.display = 'flex';
      }
    }
  }
}