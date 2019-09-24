import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';


const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: MainLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
