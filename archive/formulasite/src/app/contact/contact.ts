import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="contact-hero">
      <div class="hero-background"></div>
      <div class="container">
        <div class="hero-content">
          <span class="hero-badge">🤝 Bize Ulaşın</span>
          <h1>İletişime Geçin</h1>
          <p>Sorularınız mı var? Sponsor olmak mı istiyorsunuz? Size yardımcı olmaktan mutluluk duyarız!</p>
        </div>
      </div>
    </div>
    
    <section class="contact-content">
      <div class="container">
        <!-- Content -->
        <div class="tab-content">
          <div class="contact-grid">
            
            <!-- İletişim Kartları -->
            <div class="contact-cards">
              <h2 class="section-title">İletişim Bilgilerimiz</h2>
              
              <div class="info-card">
                <div class="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h3>Adres</h3>
                <p>Çukurova Üniversitesi Kampüsü<br>Makine Mühendisliği Laboratuvarı 2<br>Sarıçam, Adana, Türkiye</p>
              </div>
              
              <div class="info-card">
                <div class="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h3>E-posta</h3>
                <p><a href="mailto:1.5adanaformulastudent.electric@gmail.com">1.5adanaformulastudent.electric@gmail.com</a></p>
              </div>
              
              <div class="info-card">
                <div class="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <h3>Instagram</h3>
                <p><a href="https://www.instagram.com/birbucuk.formula" target="_blank" rel="noopener">@birbucuk.formula</a></p>
              </div>
              
              <div class="info-card">
                <div class="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <h3>LinkedIn</h3>
                <p><a href="https://www.linkedin.com/company/birbucukformulasae" target="_blank" rel="noopener">1.5 Adana Formula Team</a></p>
              </div>

              <!-- Hızlı İletişim Butonları -->
              <div class="quick-contact">
                <h3>Hızlı İletişim</h3>
                <div class="quick-buttons">
                  <a href="mailto:1.5adanaformulastudent.electric@gmail.com?subject=İletişim%20Formu" class="quick-btn email-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span>E-posta Gönder</span>
                  </a>
                  <a href="https://www.instagram.com/birbucuk.formula" target="_blank" rel="noopener" class="quick-btn instagram-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    </svg>
                    <span>Instagram DM</span>
                  </a>
                </div>
              </div>
            </div>
            
            <!-- İletişim Formu QR -->
            <div class="contact-form-wrapper">
              <div class="qr-section">
                <div class="qr-header">
                  <div class="qr-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="3" y="3" width="7" height="7"></rect>
                      <rect x="14" y="3" width="7" height="7"></rect>
                      <rect x="14" y="14" width="7" height="7"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                  </div>
                  <h2>Başvuru Formu</h2>
                  <p>QR kodu okutarak veya butona tıklayarak formu doldurun</p>
                </div>

                <div class="qr-container">
                  <div class="qr-code-box">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://docs.google.com/forms/d/1YLHC4DzuwRoDOzofaxWA56RQszgvsdspUY_L95a6wt8/viewform" 
                         alt="İletişim Formu QR Kodu"
                         class="qr-image">
                    <div class="qr-overlay">
                      <div class="qr-pulse"></div>
                    </div>
                  </div>
                  
                  <div class="qr-instructions">
                    <div class="instruction-item">
                      <div class="instruction-number">1</div>
                      <div class="instruction-text">
                        <h4>Telefon Kameranızı Açın</h4>
                        <p>Kamera uygulamanızı veya QR kod okuyucunuzu kullanın</p>
                      </div>
                    </div>
                    
                    <div class="instruction-item">
                      <div class="instruction-number">2</div>
                      <div class="instruction-text">
                        <h4>QR Kodu Okutun</h4>
                        <p>Kamerayı QR kodun üzerine tutun</p>
                      </div>
                    </div>
                    
                    <div class="instruction-item">
                      <div class="instruction-number">3</div>
                      <div class="instruction-text">
                        <h4>Formu Doldurun</h4>
                        <p>Açılan sayfada formu tamamlayın</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="qr-actions">
                  <a href="https://docs.google.com/forms/d/1YLHC4DzuwRoDOzofaxWA56RQszgvsdspUY_L95a6wt8/viewform" 
                     target="_blank" 
                     rel="noopener"
                     class="btn-form-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Formu Tarayıcıda Aç
                  </a>
                  
                  <button class="btn-download-qr" (click)="downloadQR()">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    QR Kodu İndir
                  </button>
                </div>

                <div class="qr-footer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                  <p>QR kodu okutmakta sorun yaşıyorsanız yukarıdaki butonu kullanabilirsiniz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    * {
      box-sizing: border-box;
    }

    .contact-hero {
      position: relative;
      padding: 140px 20px 100px;
      background: #0a0a15;
      overflow: hidden;
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 20% 30%, rgba(255, 107, 53, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(255, 140, 66, 0.1) 0%, transparent 50%);
    }

    .hero-background::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, transparent 0%, rgba(255, 107, 53, 0.05) 100%);
    }
    
    .container {
      max-width: 1300px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    .hero-content {
      text-align: center;
      animation: fadeInUp 0.8s ease;
    }

    .hero-badge {
      display: inline-block;
      padding: 10px 24px;
      background: rgba(255, 107, 53, 0.1);
      border: 1px solid rgba(255, 107, 53, 0.3);
      border-radius: 50px;
      color: #ff6b35;
      font-size: 0.95rem;
      font-weight: 600;
      margin-bottom: 20px;
      animation: fadeInUp 0.8s ease 0.2s backwards;
    }
    
    .contact-hero h1 {
      font-size: 4rem;
      font-weight: 900;
      margin-bottom: 20px;
      background: linear-gradient(135deg, #ffffff 0%, #ff6b35 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1.2;
      animation: fadeInUp 0.8s ease 0.3s backwards;
    }

    .contact-hero p {
      font-size: 1.25rem;
      color: #a0a0a0;
      max-width: 650px;
      margin: 0 auto;
      line-height: 1.7;
      animation: fadeInUp 0.8s ease 0.4s backwards;
    }
    
    .contact-content {
      padding: 80px 20px 100px;
      background: #0a0a15;
      min-height: 100vh;
    }

    /* Tab Content */
    .tab-content {
      animation: fadeInUp 0.5s ease;
    }
    
    .contact-grid {
      display: grid;
      grid-template-columns: 400px 1fr;
      gap: 60px;
      align-items: start;
    }

    .section-title {
      color: #ffffff;
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 30px;
      background: linear-gradient(135deg, #ffffff 0%, #ff6b35 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .contact-cards {
      position: sticky;
      top: 100px;
    }

    .info-card {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      padding: 25px;
      margin-bottom: 20px;
      transition: all 0.3s ease;
    }

    .info-card:hover {
      transform: translateY(-5px);
      border-color: rgba(255, 107, 53, 0.3);
      box-shadow: 0 10px 30px rgba(255, 107, 53, 0.15);
    }

    .card-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 15px;
      color: white;
    }

    .info-card h3 {
      color: #ffffff;
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .info-card p {
      color: #a0a0a0;
      font-size: 0.95rem;
      line-height: 1.6;
      margin: 0;
    }

    .info-card a {
      color: #ff6b35;
      text-decoration: none;
      transition: color 0.3s;
    }

    .info-card a:hover {
      color: #ff8c42;
      text-decoration: underline;
    }

    .quick-contact {
      margin-top: 30px;
      padding-top: 30px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .quick-contact h3 {
      color: #ffffff;
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 15px;
    }

    .quick-buttons {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .quick-btn {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 20px;
      border-radius: 12px;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.95rem;
      transition: all 0.3s ease;
    }

    .email-btn {
      background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
      color: white;
    }

    .email-btn:hover {
      transform: translateX(5px);
      box-shadow: 0 5px 20px rgba(255, 107, 53, 0.4);
    }

    .instagram-btn {
      background: linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #F56040 100%);
      color: white;
    }

    .instagram-btn:hover {
      transform: translateX(5px);
      box-shadow: 0 5px 20px rgba(225, 48, 108, 0.4);
    }
    
    .contact-form-wrapper {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(30px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 25px;
      padding: 50px;
      position: relative;
      overflow: hidden;
    }

    .contact-form-wrapper::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #ff6b35 0%, #ff8c42 100%);
    }

    /* QR Section Styles */
    .qr-section {
      padding: 20px 0;
    }

    .qr-header {
      text-align: center;
      margin-bottom: 40px;
    }

    .qr-icon {
      width: 60px;
      height: 60px;
      margin: 0 auto 20px;
      background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      animation: pulse 2s ease-in-out infinite;
    }

    .qr-header h2 {
      color: #ffffff;
      font-size: 2rem;
      font-weight: 900;
      margin-bottom: 15px;
      background: linear-gradient(135deg, #ffffff 0%, #ff6b35 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .qr-header p {
      color: #a0a0a0;
      font-size: 1rem;
      max-width: 500px;
      margin: 0 auto;
    }

    .qr-container {
      display: flex;
      gap: 40px;
      align-items: center;
      margin-bottom: 35px;
    }

    .qr-code-box {
      position: relative;
      flex-shrink: 0;
    }

    .qr-image {
      width: 250px;
      height: 250px;
      border-radius: 20px;
      background: white;
      padding: 15px;
      box-shadow: 0 15px 50px rgba(255, 107, 53, 0.3);
      display: block;
    }

    .qr-overlay {
      position: absolute;
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      border: 3px solid transparent;
      border-radius: 25px;
      background: linear-gradient(135deg, #ff6b35, #ff8c42) border-box;
      -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
    }

    .qr-pulse {
      position: absolute;
      inset: -20px;
      border-radius: 30px;
      background: linear-gradient(135deg, rgba(255, 107, 53, 0.3), rgba(255, 140, 66, 0.3));
      filter: blur(20px);
      animation: qrPulse 2s ease-in-out infinite;
    }

    .qr-instructions {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .instruction-item {
      display: flex;
      gap: 18px;
      align-items: flex-start;
      padding: 20px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      transition: all 0.3s ease;
    }

    .instruction-item:hover {
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(255, 107, 53, 0.3);
      transform: translateX(5px);
    }

    .instruction-number {
      width: 40px;
      height: 40px;
      flex-shrink: 0;
      background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.2rem;
      font-weight: 700;
    }

    .instruction-text h4 {
      color: #ffffff;
      font-size: 1rem;
      font-weight: 600;
      margin: 0 0 6px 0;
    }

    .instruction-text p {
      color: #a0a0a0;
      font-size: 0.9rem;
      margin: 0;
      line-height: 1.5;
    }

    .qr-actions {
      display: flex;
      gap: 15px;
      margin-bottom: 25px;
    }

    .btn-form-link,
    .btn-download-qr {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 16px 28px;
      border-radius: 12px;
      font-size: 0.95rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      border: none;
      font-family: inherit;
    }

    .btn-form-link {
      background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
      color: white;
      box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
    }

    .btn-form-link:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(255, 107, 53, 0.5);
    }

    .btn-download-qr {
      background: rgba(255, 255, 255, 0.05);
      color: #ffffff;
      border: 2px solid rgba(255, 255, 255, 0.1);
    }

    .btn-download-qr:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 107, 53, 0.3);
      transform: translateY(-2px);
    }

    .qr-footer {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px 22px;
      background: rgba(255, 107, 53, 0.08);
      border: 1px solid rgba(255, 107, 53, 0.2);
      border-radius: 12px;
    }

    .qr-footer svg {
      flex-shrink: 0;
      color: #ff6b35;
    }

    .qr-footer p {
      margin: 0;
      color: #a0a0a0;
      font-size: 0.85rem;
      line-height: 1.5;
    }

    /* Responsive Design */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
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
        transform: translateY(-20px);
      }
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }

    @keyframes qrPulse {
      0%, 100% {
        opacity: 0.3;
        transform: scale(1);
      }
      50% {
        opacity: 0.6;
        transform: scale(1.1);
      }
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .contact-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .contact-cards {
        position: static;
      }

      .contact-hero h1 {
        font-size: 3rem;
      }

      .qr-container {
        flex-direction: column;
        gap: 30px;
      }

      .application-header {
        flex-direction: column;
        text-align: center;
      }

      .header-decoration {
        margin-left: 0;
        margin-top: 20px;
      }
    }

    @media (max-width: 768px) {
      .contact-hero {
        padding: 100px 20px 60px;
      }

      .contact-hero h1 {
        font-size: 2.5rem;
      }

      .contact-hero p {
        font-size: 1.1rem;
      }

      .contact-content {
        padding: 60px 20px;
      }

      .contact-form-wrapper {
        padding: 30px 20px;
      }

      .qr-image {
        width: 220px;
        height: 220px;
        padding: 12px;
      }

      .qr-header h2 {
        font-size: 1.8rem;
      }

      .qr-actions {
        flex-direction: column;
      }

      .instruction-item {
        padding: 16px;
      }
    }
  `]
})
export class Contact {
  downloadQR() {
    const link = document.createElement('a');
    link.href = 'https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=https://docs.google.com/forms/d/1YLHC4DzuwRoDOzofaxWA56RQszgvsdspUY_L95a6wt8/viewform';
    link.download = 'basvuru-formu-qr.png';
    link.click();
  }
}