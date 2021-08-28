import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveLogsPage } from './live-logs.page';

describe('LiveLogsPage', () => {
  let component: LiveLogsPage;
  let fixture: ComponentFixture<LiveLogsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveLogsPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveLogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
