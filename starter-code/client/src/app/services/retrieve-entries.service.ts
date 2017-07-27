import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RetrieveEntriesService {
  BASE_URL: String = "http://localhost:3000";

  constructor(private http: Http) {}

  retrieveEntries(){
    return this.http.get(`${this.BASE_URL}/api/journal-entries`)
      .map((res) => res.json());
  }

}
