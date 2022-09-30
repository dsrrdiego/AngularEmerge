import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PestaniaContactosComponent } from './pestania-contactos.component';

describe('PestaniaContactosComponent', () => {
  let component: PestaniaContactosComponent;
  let fixture: ComponentFixture<PestaniaContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PestaniaContactosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PestaniaContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
