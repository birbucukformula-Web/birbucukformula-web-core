import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { App } from './app';

@Component({
  template: '<h1>Test Home</h1>',
  standalone: true
})
class TestHomeComponent { }

@Component({
  template: '<h1>Test About</h1>',
  standalone: true
})
class TestAboutComponent { }

describe('App Component', () => {
  let router: Router;
  let location: Location;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        {
          provide: 'routes',
          useValue: [
            { path: '', component: TestHomeComponent },
            { path: 'about', component: TestAboutComponent }
          ]
        }
      ]
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(App);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have correct title', () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Formula Team');
  });

  it('should render navigation', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const navLinks = compiled.querySelectorAll('nav a');
    expect(navLinks.length).toBeGreaterThan(0);
  });

  it('should have logo', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const logo = compiled.querySelector('.logo img');
    expect(logo).toBeTruthy();
  });
});