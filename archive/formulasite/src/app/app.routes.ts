import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./home/home').then(m => m.Home),
    title: 'Ana Sayfa - Formula Team'
  },
  { 
    path: 'about', 
    loadComponent: () => import('./about/about').then(m => m.About),
    title: 'Hakkımızda - Formula Team'
  },
  { 
    path: 'team', 
    loadComponent: () => import('./team/team').then(m => m.Team),
    title: 'Takımımız - Formula Team'
  },
  { 
    path: 'memories', 
    loadComponent: () => import('./memories/memories').then(m => m.Memories),
    title: 'Anılarımız - Formula Team'
  },
  { 
    path: 'sponsors', 
    loadComponent: () => import('./sponsors/sponsors').then(m => m.Sponsors),
    title: 'Sponsorlarımız - Formula Team'
  },
  { 
    path: 'contact', 
    loadComponent: () => import('./contact/contact').then(m => m.Contact),
    title: 'İletişim - Formula Team'
  },
  { 
    path: '**', 
    redirectTo: '',
    pathMatch: 'full'
  }
];
