import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone:true,
  imports: [
    MatCardModule,  // Import Material Card module here
    MatButtonModule // Import Material Button module here
  ]
})
export class HomeComponent {
  constructor(private router: Router) {}

  joinContest(): void {
    // Navigate to the join contest page
    this.router.navigate(['/join-contest']);
  }

  createContest(): void {
    // Navigate to the create contest page
    this.router.navigate(['/create-contest']);
  }
}
