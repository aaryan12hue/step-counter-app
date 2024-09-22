import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JoinContestComponent } from './join-contest/join-contest.component';
import { CreateContestComponent } from './create-contest/create-contest.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'join-contest', component: JoinContestComponent },
  { path: 'create-contest', component: CreateContestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
