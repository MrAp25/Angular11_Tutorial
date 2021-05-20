import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazylistaComponent } from './lazylista.component';

describe('LazylistaComponent', () => {
  let component: LazylistaComponent;
  let fixture: ComponentFixture<LazylistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazylistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazylistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
