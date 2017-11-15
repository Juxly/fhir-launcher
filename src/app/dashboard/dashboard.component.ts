import { Component } from '@angular/core';
import { ClientService } from '../client.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html'
})

export class DashboardComponent {
  constructor(public clientService: ClientService) {}
}
