import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutersprintbacklohComponent } from './ajoutersprintbackloh.component';

describe('AjoutersprintbacklohComponent', () => {
  let component: AjoutersprintbacklohComponent;
  let fixture: ComponentFixture<AjoutersprintbacklohComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutersprintbacklohComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutersprintbacklohComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
