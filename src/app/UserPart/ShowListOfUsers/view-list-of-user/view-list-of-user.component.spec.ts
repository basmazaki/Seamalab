import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListOfUserComponent } from './view-list-of-user.component';

describe('ViewListOfUserComponent', () => {
  let component: ViewListOfUserComponent;
  let fixture: ComponentFixture<ViewListOfUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewListOfUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewListOfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
