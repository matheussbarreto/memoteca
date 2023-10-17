import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirPensamentosComponent } from './excluir-pensamentos.component';

describe('ExcluirPensamentosComponent', () => {
  let component: ExcluirPensamentosComponent;
  let fixture: ComponentFixture<ExcluirPensamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirPensamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirPensamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
