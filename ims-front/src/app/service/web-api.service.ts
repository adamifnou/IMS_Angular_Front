import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  httpOptions: Object;

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      }),
      observe: 'response' as 'body',
    };
  }
  post(
    url: string,
    body: any,
  ): Observable<any> {
    return this.httpClient.post(url, body, this.httpOptions);
  }
  get(url: string, httpOptionsParams?: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      }),
      observe: 'response' as 'body',
      params: {},
    };

    if (httpOptionsParams) {
      httpOptions.params = httpOptionsParams;
    }

    return this.httpClient.get(url, httpOptions);
  }

}
