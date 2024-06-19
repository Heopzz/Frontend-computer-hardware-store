import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CradGoodsComponent } from './crad-goods.component';

describe('CradGoodsComponent', () => {
  let component: CradGoodsComponent;
  let fixture: ComponentFixture<CradGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CradGoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CradGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
