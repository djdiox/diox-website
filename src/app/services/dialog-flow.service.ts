import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
/**
 * Natural Language Processing made easy
 * Learns by Artificial Intelligence
 */
export class DialogFlowService {
  /**
   * The baseURL From DialogFlow
   * @type {string}
   */
  private baseURL = 'https://api.dialogflow.com/';

  constructor(private http: HttpClient) {
  }

  /**
   * Gets the response for the DialogFlow Request
   * @param query {string} A string that should be searched in the AI
   * @returns {Observable<Promise<any>>} Http Request Observable
   */
  public getResponse(query: string) {
    const data = {
      query: query,
      lang: 'de',
      sessionId: '12345'
    };

    return this.http
      .post(`${this.baseURL}v1/query?v=20150910`, data,
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${environment.dialogFlowToken}`
          })
        })
      .pipe(map((res: Response) => res.json()));
  }
}
