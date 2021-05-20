import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazylistbComponent } from './lazylistb.component';

describe('LazylistbComponent', () => {
  let component: LazylistbComponent;
  let fixture: ComponentFixture<LazylistbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazylistbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazylistbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
