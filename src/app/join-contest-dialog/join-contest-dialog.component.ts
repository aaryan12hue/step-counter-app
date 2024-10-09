import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GroupData, Member } from '../model';

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
    this.addMember(this.contestCode, this.userName);
    this.dialogRef.close({ userName: this.userName, contestCode: this.contestCode });
  }

  addMember(groupId: string, memberName: string) {
    const newMember: Member = {
      name: memberName,
      payments: [] // No payments initially
    };
    const groupData = this.loadGroupData(groupId);

    groupData?.members.push(newMember);

    console.log(groupData);
  }

  loadGroupData(groupId: string) {
    const storedGroupData = localStorage.getItem(groupId);

    if (storedGroupData) {
      return JSON.parse(storedGroupData) as GroupData; // Parse the stored data
    } else {
      console.log('No group data found in localStorage.');
      return null;
    }
  }
}