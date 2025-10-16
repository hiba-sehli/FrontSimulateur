import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportExpertComponent } from './rapport-expert.component';

describe('RapportExpertComponent', () => {
  let component: RapportExpertComponent;
  let fixture: ComponentFixture<RapportExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RapportExpertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
