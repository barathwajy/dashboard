import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Subscriberdashboard1Component } from './subscriberdashboard1/subscriberdashboard1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

import { ChartsModule } from './charts/charts.module';
import { ChartjsComponent } from './charts/chartjs/chartjs.component';
import { LineChartComponent } from './line-chart/line-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    Subscriberdashboard1Component,
    NavbarComponent,
    ChartjsComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
