import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecesDetacheesComponent } from './pieces-detachees.component';

describe('PiecesDetacheesComponent', () => {
  let component: PiecesDetacheesComponent;
  let fixture: ComponentFixture<PiecesDetacheesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiecesDetacheesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiecesDetacheesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
