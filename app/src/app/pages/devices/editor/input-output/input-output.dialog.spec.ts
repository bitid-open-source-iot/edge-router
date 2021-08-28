import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputDialog } from './input-output.dialog';

describe('InputOutputDialog', () => {
  let component: InputOutputDialog;
  let fixture: ComponentFixture<InputOutputDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
