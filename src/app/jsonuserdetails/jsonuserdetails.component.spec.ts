import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonuserdetailsComponent } from './jsonuserdetails.component';

describe('JsonuserdetailsComponent', () => {
  let component: JsonuserdetailsComponent;
  let fixture: ComponentFixture<JsonuserdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonuserdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonuserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
