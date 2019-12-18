import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyHeaderContainerComponent } from './modify-header-container.component';

describe('ModifyHeaderContainerComponent', () => {
  let component: ModifyHeaderContainerComponent;
  let fixture: ComponentFixture<ModifyHeaderContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyHeaderContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyHeaderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
