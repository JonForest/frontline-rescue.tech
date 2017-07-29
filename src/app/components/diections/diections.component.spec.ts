import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiectionsComponent } from './diections.component';

describe('DiectionsComponent', () => {
  let component: DiectionsComponent;
  let fixture: ComponentFixture<DiectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
