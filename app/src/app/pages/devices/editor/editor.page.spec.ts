import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesEditorPage } from './editor.page';

describe('DevicesEditorPage', () => {
  let component: DevicesEditorPage;
  let fixture: ComponentFixture<DevicesEditorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicesEditorPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesEditorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
