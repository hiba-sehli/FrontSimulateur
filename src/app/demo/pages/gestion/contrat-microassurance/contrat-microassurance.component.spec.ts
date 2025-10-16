import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratMicroassuranceComponent } from './contrat-microassurance.component';

describe('ContratMicroassuranceComponent', () => {
  let component: ContratMicroassuranceComponent;
  let fixture: ComponentFixture<ContratMicroassuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContratMicroassuranceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratMicroassuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
