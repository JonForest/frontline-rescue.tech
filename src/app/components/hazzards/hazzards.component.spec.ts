import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HazzardsComponent } from './hazzards.component';

describe('HazzardsComponent', () => {
  let component: HazzardsComponent;
  let fixture: ComponentFixture<HazzardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HazzardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HazzardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
