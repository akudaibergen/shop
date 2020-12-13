/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestGetsComponent } from './test-gets.component';

describe('TestGetsComponent', () => {
  let component: TestGetsComponent;
  let fixture: ComponentFixture<TestGetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
