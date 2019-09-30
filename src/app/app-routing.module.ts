import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './shared/layout/home/home.component';
import {NotFoundComponent} from './shared/layout/not-found/not-found.component';
import {ChartComponent} from './shared/layout/chart/chart.component';



const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'chart', component: ChartComponent, },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
