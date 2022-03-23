import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParquesnaturalesComponent } from './parquesnaturales.component';

describe('ParquesnaturalesComponent', () => {
  let component: ParquesnaturalesComponent;
  let fixture: ComponentFixture<ParquesnaturalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParquesnaturalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParquesnaturalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
