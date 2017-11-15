import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { HeaderComponent } from './header/header.component'
import { DetailComponent } from './detail/detail.component'

import { ClientService } from './client.service'
import { ContextService } from './context.service'
@NgModule({
  declarations: [
  AppComponent,
  DashboardComponent,
  HeaderComponent,
  DetailComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule
  ],
  providers: [ClientService, ContextService],
  bootstrap: [AppComponent] // start app component at launch
})
export class AppModule { }
