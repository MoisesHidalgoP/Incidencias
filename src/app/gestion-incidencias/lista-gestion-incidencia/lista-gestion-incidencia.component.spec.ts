import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGestionIncidenciaComponent } from './lista-gestion-incidencia.component';

describe('ListaGestionIncidenciaComponent', () => {
  let component: ListaGestionIncidenciaComponent;
  let fixture: ComponentFixture<ListaGestionIncidenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaGestionIncidenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaGestionIncidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
