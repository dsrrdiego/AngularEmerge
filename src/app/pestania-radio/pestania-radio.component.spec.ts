import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PestaniaRadioComponent } from './pestania-radio.component';

describe('PestaniaRadioComponent', () => {
  let component: PestaniaRadioComponent;
  let fixture: ComponentFixture<PestaniaRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PestaniaRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PestaniaRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
