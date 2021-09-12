import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportExportPage } from './import-export.page';

describe('ImportExportPage', () => {
  let component: ImportExportPage;
  let fixture: ComponentFixture<ImportExportPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportExportPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportExportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
