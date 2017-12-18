import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../material.module';
import { TopbarComponent } from './topbar/topbar.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { InputTextModule, ButtonModule } from 'primeng/primeng';
import { SideBarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
  imports: [
    CommonModule, MaterialModule, Angular2FontawesomeModule, InputTextModule, ButtonModule, FormsModule
  ],
  exports: [DashboardComponent],
  declarations: [DashboardComponent, TopbarComponent, SideBarComponent, LoginComponent, RegisterComponent],
  entryComponents: [LoginComponent, RegisterComponent]
})
export class DashboardModule { }
