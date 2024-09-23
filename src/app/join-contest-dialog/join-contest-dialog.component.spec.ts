import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinContestDialogComponent } from './join-contest-dialog.component';

describe('JoinContestDialogComponent', () => {
  let component: JoinContestDialogComponent;
  let fixture: ComponentFixture<JoinContestDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinContestDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinContestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
