import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  token: any

  constructor(private http: HttpClient) {
  }

  public getQuery(token:string) {
    const url = `https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=PAR`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })

    return this.http.get(url, { headers });
  }

  public getToken() {
    const url = 'https://test.api.amadeus.com/v1/security/oauth2/token'

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }

    let body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    body.set('client_id', 'v3AJXEBGPtX7w33xGG5TSN1AruRZwG6f');
    body.set('client_secret', 'DMq06jo8GNwVSez4');

    return this.http.post(url, body.toString(), options)
  }


  async getHotelsList() {
    const res = await this.getToken().toPromise()
    const token = res['access_token']
    return this.getQuery(token)
      .pipe(map(data => data['data']
      ))
  }


}
