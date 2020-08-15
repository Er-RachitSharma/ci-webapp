import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PnrService {

  constructor(private http: HttpClient) { }

  fetchPnrStatus(pnrNo: number) {
    let url = "http://localhost:8181/RESTApp/api/pnr?pnrNo="+pnrNo;
    return this.http.get(url);
  }
}
