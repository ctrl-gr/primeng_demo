import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChoosePlayerComponent} from "./pages/choose-player/choose-player.component";

const routes: Routes = [
  {
    path: 'players', component: ChoosePlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
