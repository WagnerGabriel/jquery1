import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoRegistroComponent } from './photo-registro.component';

describe('PhotoRegistroComponent', () => {
  let component: PhotoRegistroComponent;
  let fixture: ComponentFixture<PhotoRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
