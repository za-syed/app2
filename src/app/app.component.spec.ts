import { AppComponent } from './app.component';
import {Hero} from './hero';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', function () {
  let de: DebugElement;
  let se: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let hero: Hero;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    se =fixture.debugElement.query(By.css('strong'));
     //hero = new Hero(1,'Syed','Super Strength', 'Villain');
  });

  // beforeEach(()=>{
  //  hero = new Hero(1,'Syed','Super Strength', 'Villain');
  // } );

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/angular/i,
      '<h1> should say something about "Angular"');     
  });
  it('should have expected the text in <strong> should say',()=>{
     const s=se.nativeElement;
      expect(s.innerText).toMatch(/Fuck You/i,'<strong> should say Fuck you');
  });

  it('should be able to create a hero',()=>{
    hero = new Hero(1,'Syed','Super Strength', 'Villain');
    expect(hero.name).toMatch('Syed','Hero name should be Syed');
  });
});
