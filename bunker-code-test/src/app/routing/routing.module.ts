import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { InstructionsComponent } from "app/instructions/instructions.component";
import { UserComponent } from "app/user/user.component";

const routes: Routes = [
    { 'path': '', 'redirectTo': 'Home', 'pathMatch': 'full' },
    { 'path': 'Home', 'component': HomeComponent },
    { 'path': 'Instructions', 'component': InstructionsComponent },
    { 'path': 'User', 'component': UserComponent }
];

@NgModule({
  'imports': [RouterModule.forRoot(routes, { 'useHash': true })],
  'exports': [RouterModule]
})
export class RoutingModule { }
