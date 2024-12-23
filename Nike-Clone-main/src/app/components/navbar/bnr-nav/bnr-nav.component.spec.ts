import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnrNavComponent } from './bnr-nav.component';

describe('BnrNavComponent', () => {
  let component: BnrNavComponent;
  let fixture: ComponentFixture<BnrNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BnrNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BnrNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
