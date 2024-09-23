import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CreateContestDialogComponent } from '../create-contest-dialog/create-contest-dialog.component';
import { JoinContestDialogComponent } from '../join-contest-dialog/join-contest-dialog.component';
import { LeaderboardComponent } from '../leaderboard/leaderboard.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone:true,
  imports: [
    MatCardModule,  // Import Material Card module here
    MatButtonModule,// Import Material Button module here,
  ]
})
export class HomeComponent {
  constructor(private dialog: MatDialog, private router: Router) {}

  joinContest(): void {
    const dialogRef = this.dialog.open(JoinContestDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.openLeaderboard(result.userName, result.contestCode);
      }
    });
  }

  // Open the dialog when "Create a Contest" is clicked
  createContest(): void {
    const dialogRef = this.dialog.open(CreateContestDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Contest Created by:', result.userName);
        console.log('Generated Contest Code:', result.contestCode);
        // You can display the generated code or navigate somewhere else
      }
    });
  }

  openLeaderboard(userName: string, contestCode: string): void {
    const leaderboardDialog = this.dialog.open(LeaderboardComponent);
    leaderboardDialog.componentInstance.userName = userName;
    leaderboardDialog.componentInstance.contestCode = contestCode;
  }
}
