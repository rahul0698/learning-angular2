/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MycodeComponent } from './mycode.component';

describe('MycodeComponent', () => {
  let component: MycodeComponent;
  let fixture: ComponentFixture<MycodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
