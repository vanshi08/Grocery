import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrocerypageComponent } from './grocerypage.component';

describe('GrocerypageComponent', () => {
  let component: GrocerypageComponent;
  let fixture: ComponentFixture<GrocerypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrocerypageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrocerypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
