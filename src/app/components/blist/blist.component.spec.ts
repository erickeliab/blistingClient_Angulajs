import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlistComponent } from './blist.component';

describe('BlistComponent', () => {
  let component: BlistComponent;
  let fixture: ComponentFixture<BlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
