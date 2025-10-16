import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrocreditComponent } from './microcredit.component';

describe('MicrocreditComponent', () => {
  let component: MicrocreditComponent;
  let fixture: ComponentFixture<MicrocreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicrocreditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicrocreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
