import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Cacheable } from 'ngx-cacheable'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

import { environment } from './../../environments/environment'
import { Chart } from './../models/chart'
import { News } from './../models/news'
import { Summary } from './../models/summary'

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(
    private errorMessage: string = 'Unknown error!',
    private http: HttpClient,
    private uriParams: HttpParams
  ) {
    uriParams
      .set('x-rapidapi-host', environment.HOST)
      .set('x-rapidapi-key', environment.API_KEY)
  }

  @Cacheable()
  getChart(symbol: string): Observable<Chart> {
    this.uriParams.set('region', environment.region)
    this.uriParams.set('interval', environment.interval)
    this.uriParams.set('symbol', symbol)
    this.uriParams.set('range', environment.range)

    return this.http
      .get<Chart>(`${environment.BASE_URL}/get-chart`, {
        params: this.uriParams,
      })
      .pipe(catchError(this.handleError))
  }

  @Cacheable()
  getCompanyProfile(symbol: string): Observable<Summary> {
    this.uriParams.set('region', environment.region)
    this.uriParams.set('symbol', symbol)
    return this.http
      .get<Summary>(`${environment.BASE_URL}/get-detail`, {
        params: this.uriParams,
      })
      .pipe(catchError(this.handleError))
  }

  @Cacheable()
  getNews(symbol: string): Observable<News> {
    this.uriParams.set('region', environment.region)
    this.uriParams.set('category', symbol)

    return this.http
      .get<News>(`${environment.BASE_URL}/get-news`, {
        params: this.uriParams,
      })
      .pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    error.error instanceof ErrorEvent
      ? `Error: ${error.error.message}`
      : `Error Code: ${error.status}\nMessage: ${error.message}`

    console.log(this.errorMessage)

    return throwError(this.errorMessage)
  }
}
