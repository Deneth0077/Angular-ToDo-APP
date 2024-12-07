import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePannelComponent } from './slide-pannel.component';

describe('SlidePannelComponent', () => {
  let component: SlidePannelComponent;
  let fixture: ComponentFixture<SlidePannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidePannelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlidePannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
