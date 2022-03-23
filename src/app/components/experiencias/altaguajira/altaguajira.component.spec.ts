import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaguajiraComponent } from './altaguajira.component';

describe('AltaguajiraComponent', () => {
  let component: AltaguajiraComponent;
  let fixture: ComponentFixture<AltaguajiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaguajiraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaguajiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
