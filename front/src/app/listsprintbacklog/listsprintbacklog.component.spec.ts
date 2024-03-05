import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsprintbacklogComponent } from './listsprintbacklog.component';

describe('ListsprintbacklogComponent', () => {
  let component: ListsprintbacklogComponent;
  let fixture: ComponentFixture<ListsprintbacklogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsprintbacklogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsprintbacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
