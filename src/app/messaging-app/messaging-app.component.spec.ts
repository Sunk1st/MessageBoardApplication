import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingAppComponent } from './messaging-app.component';

describe('MessagingAppComponent', () => {
  let component: MessagingAppComponent;
  let fixture: ComponentFixture<MessagingAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagingAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
