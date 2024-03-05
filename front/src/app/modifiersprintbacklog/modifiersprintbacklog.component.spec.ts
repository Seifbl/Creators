import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiersprintbacklogComponent } from './modifiersprintbacklog.component';

describe('ModifiersprintbacklogComponent', () => {
  let component: ModifiersprintbacklogComponent;
  let fixture: ComponentFixture<ModifiersprintbacklogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiersprintbacklogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifiersprintbacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
