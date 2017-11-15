import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ClientService } from '../client.service'
import { ContextService } from '../context.service'
import { Context } from '../context'
import { Client } from '../client'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.html'
})

export class DetailComponent implements OnInit {
  client: Client
  modalIsActive = false
  contexts: Context[] = []
  constructor(private clientService: ClientService, private route: ActivatedRoute,
  public contextService: ContextService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.client = this.clientService.get(id)
    this.contextService.getContexts()
      .subscribe(contexts => this.contexts = contexts)
  }

  showModal () {
    this.modalIsActive = !this.modalIsActive
  }
}
