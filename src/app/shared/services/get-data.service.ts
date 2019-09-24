import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetDataService {
  BASE_URL: string;

  constructor(private http: HttpClient) {
    this.BASE_URL = document.getElementsByTagName('base')[0].href;
  }

  getData(file: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}assets/data/${file}.json`);
  }
}
