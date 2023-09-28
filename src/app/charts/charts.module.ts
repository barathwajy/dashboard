import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartjsComponent } from './chartjs/chartjs.component';

import { NgChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';

@NgModule({
  declarations: [
    // ChartjsComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    ChartistModule
  ]
})
export class ChartsModule { }
