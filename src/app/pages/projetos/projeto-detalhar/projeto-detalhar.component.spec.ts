import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoDetalharComponent } from './projeto-detalhar.component';

describe('ProjetoDetalharComponent', () => {
  let component: ProjetoDetalharComponent;
  let fixture: ComponentFixture<ProjetoDetalharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetoDetalharComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetoDetalharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
