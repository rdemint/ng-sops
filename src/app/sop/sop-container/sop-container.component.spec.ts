import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SopContainerComponent } from './sop-container.component';

describe('SopContainerComponent', () => {
  let component: SopContainerComponent;
  let fixture: ComponentFixture<SopContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SopContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SopContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
