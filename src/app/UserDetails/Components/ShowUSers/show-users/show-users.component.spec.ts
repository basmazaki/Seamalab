import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUSersComponent } from './show-users.component';

describe('ShowUSersComponent', () => {
  let component: ShowUSersComponent;
  let fixture: ComponentFixture<ShowUSersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowUSersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUSersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
