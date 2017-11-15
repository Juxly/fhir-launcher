import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import { catchError, map, tap } from 'rxjs/operators'

import { Context } from './context'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class ContextService {
  contexts: Context[] = []
  private url = 'http://localhost:3000/api/contexts'

  constructor(private http: HttpClient) {}

  getContexts (): Observable<Context[]> {
    return this.http.get<Context[]>(this.url).pipe(
      tap(contexts => this.contexts = contexts),
      catchError(this.handleError('getContexts', []))
      )
      }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
