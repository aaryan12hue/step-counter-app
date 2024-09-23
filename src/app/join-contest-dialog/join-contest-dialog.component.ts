import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  selector: 'app-join-contest-dialog',
  templateUrl: './join-contest-dialog.component.html',
  styleUrls: ['./join-contest-dialog.component.scss']
})
export class JoinContestDialogComponent {
  userName: string = '';
  contestCode: string = '';

  constructor(public dialogRef: MatDialogRef<JoinContestDialogComponent>) {}

  cancel(): void {
    this.dialogRef.close();
  }

  joinContest(): void {
    this.dialogRef.close({ userName: this.userName, contestCode: this.contestCode });
  }
}