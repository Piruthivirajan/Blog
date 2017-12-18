import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardModule} from './dashboard/dashboard.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
      ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MaterialModule,DashboardModule,Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
