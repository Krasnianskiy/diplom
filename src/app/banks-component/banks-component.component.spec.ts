import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanksComponentComponent } from './banks-component.component';

describe('BanksComponentComponent', () => {
  let component: BanksComponentComponent;
  let fixture: ComponentFixture<BanksComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanksComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanksComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
