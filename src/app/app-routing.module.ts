import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegComponent } from './reg/reg.component';
import { LuckydrawComponent } from './luckydraw/luckydraw.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reset/:id', component: HomeComponent },
  { path: 'luckydraw', component: LuckydrawComponent },
  { path: 'reg', component: RegComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
