import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-contest-dialog',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, CommonModule],
  templateUrl: './create-contest-dialog.component.html',
  styleUrl: './create-contest-dialog.component.scss'
})
export class CreateContestDialogComponent {
  userName: string = '';
  contestId: string = ''; // Stores the generated contest ID
  copied: boolean = false; // Tracks if the contest ID was copied

  constructor(public dialogRef: MatDialogRef<CreateContestDialogComponent>) {}

  // Cancel dialog
  cancel(): void {
    this.dialogRef.close();
  }

  // Generate contest ID and show it to the user
  createContest(): void {
    if (this.userName) {
      this.contestId = this.generateContestId();
    }
  }

  // Close dialog after showing contest ID
  closeDialog(): void {
    this.dialogRef.close({ userName: this.userName, contestId: this.contestId });
  }

  // Function to generate a random contest ID
  generateContestId(): string {
    return Math.random().toString(36).substr(2, 8).toUpperCase(); // Generates an 8-character alphanumeric ID
  }

  // Function to copy contest ID to clipboard
  copyContestId(): void {
    navigator.clipboard.writeText(this.contestId).then(() => {
      this.copied = true;
    });
  }

  // Function to share contest ID (you can customize this for actual sharing platforms)
  shareContestId(): void {
    const shareData = {
      title: 'Join My Contest',
      text: `Join my contest with this ID: ${this.contestId}`,
      url: window.location.href, // The current page URL or another relevant URL
    };

    if (navigator.share) {
      navigator.share(shareData).catch(err => console.error('Error sharing:', err));
    } else {
      alert('Sharing is not supported on this browser.');
    }
  }
}
