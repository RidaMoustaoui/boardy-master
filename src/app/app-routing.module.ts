import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardComponent } from './board/board.component';
import { AboutComponent } from "./componentes/about/about.component";
import { HomeComponent } from "./componentes/home/home.component";

const routes: Routes = [
  {path:'about', component: AboutComponent},
  {path:'home', component: BoardComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }