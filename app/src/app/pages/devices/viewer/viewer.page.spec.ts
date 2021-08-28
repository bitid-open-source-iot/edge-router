import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesViewerPage } from './viewer.page';

describe('DevicesViewerPage', () => {
  let component: DevicesViewerPage;
  let fixture: ComponentFixture<DevicesViewerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicesViewerPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesViewerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
