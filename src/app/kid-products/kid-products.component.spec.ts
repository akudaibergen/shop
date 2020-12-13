/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KidProductsComponent } from './kid-products.component';

describe('KidProductsComponent', () => {
  let component: KidProductsComponent;
  let fixture: ComponentFixture<KidProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
