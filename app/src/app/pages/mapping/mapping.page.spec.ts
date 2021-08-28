import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingPage } from './mapping.page';

describe('MappingPage', () => {
  let component: MappingPage;
  let fixture: ComponentFixture<MappingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MappingPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
