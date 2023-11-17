import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponantComponent } from './home-componant.component';

describe('HomeComponantComponent', () => {
  let component: HomeComponantComponent;
  let fixture: ComponentFixture<HomeComponantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponantComponent]
    });
    fixture = TestBed.createComponent(HomeComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
