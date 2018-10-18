import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinFlatComponent } from './join-flat.component';

describe('JoinFlatComponent', () => {
  let component: JoinFlatComponent;
  let fixture: ComponentFixture<JoinFlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JoinFlatComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
