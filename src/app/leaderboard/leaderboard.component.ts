import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';


@Component({
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatTableModule, MatButtonModule],
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent {
  @Input() userName: string = '';
  @Input() contestCode: string = '';
  
  leaderboard: { name: string; steps: number; date: string }[] = [];
  stepsInput: number = 0;
  dateInput: string = '';
  displayedColumns: string[] = ['name', 'steps', 'date']; // Add this line

  constructor() {
    // Initial leaderboard data (can be fetched from an API)
    this.leaderboard = [
      { name: 'Alice', steps: 1000, date: '2024-09-22' },
      { name: 'Bob', steps: 1500, date: '2024-09-22' },
    ];
  }

  submitSteps(): void {
    if (this.userName && this.dateInput) {
      this.leaderboard.push({
        name: this.userName,
        steps: this.stepsInput,
        date: this.dateInput
      });
      this.stepsInput = 0; // Reset input
      this.dateInput = '';  // Reset input
    }
  }
}