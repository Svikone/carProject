import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulltextComponent } from './fulltext.component';

describe('FulltextComponent', () => {
  let component: FulltextComponent;
  let fixture: ComponentFixture<FulltextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulltextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulltextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
