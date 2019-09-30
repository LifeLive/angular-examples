import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './shared/layout/not-found/not-found.component';

import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import {HomeComponent} from './shared/layout/home/home.component';
import { ChartComponent } from './shared/layout/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    SidebarComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
