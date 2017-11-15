import { NgModule } from '@angular/core'
import { RouterModule, Routes }  from '@angular/router'

import { DashboardComponent } from './dashboard/dashboard.component'
import { DetailComponent } from './detail/detail.component'
const routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: DetailComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
