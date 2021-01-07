import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisPlayerListComponent } from './tennis-player-list.component';

describe('TennisPlayerListComponent', () => {
  let component: TennisPlayerListComponent;
  let fixture: ComponentFixture<TennisPlayerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TennisPlayerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TennisPlayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
