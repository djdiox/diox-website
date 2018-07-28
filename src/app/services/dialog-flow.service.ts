import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DialogFlowService {


  private baseURL = 'https://api.dialogflow.com/v1/query?v=20150910';
  private token: string = environment.dialogFlowToken;

  constructor(private http: HttpClient) {
  }

  public getResponse(query: string) {
    const data = {
      query: query,
      lang: 'de',
      sessionId: '12345'
    };

    return this.http
      .post(`${this.baseURL}`, data,
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
          })
        })
      .pipe(map((res: Response) => res.json()));
  }
}
