import { Injectable  } from '@angular/core'
import { Client } from './client'

@Injectable()
export class ClientService {
  clients: Client[] = [{
    id: 1,
    name: 'Hard Coded App',
    appType: 'Provider',
    fhirSpec: 'dtsu2',
    clientId: 'A clientid'
    }]

    get(id: number) {
      return this.clients[0]
    }
}

