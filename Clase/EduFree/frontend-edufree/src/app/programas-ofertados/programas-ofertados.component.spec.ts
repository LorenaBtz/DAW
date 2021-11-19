import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramasOfertadosComponent } from './programas-ofertados.component';

describe('ProgramasOfertadosComponent', () => {
  let component: ProgramasOfertadosComponent;
  let fixture: ComponentFixture<ProgramasOfertadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramasOfertadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramasOfertadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
