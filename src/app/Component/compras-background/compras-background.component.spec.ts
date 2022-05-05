import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasBackgroundComponent } from './compras-background.component';

describe('ComprasBackgroundComponent', () => {
  let component: ComprasBackgroundComponent;
  let fixture: ComponentFixture<ComprasBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprasBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
