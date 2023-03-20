import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseurl = "http://localhost:8081/";

  get(url: string) {
    return this.http.get(this.baseurl + url);
  }

  post(url: string, data: any) {
    return this.http.post(this.baseurl + url, data);
  }

  put(url: string, data: any) {
    return this.http.put(this.baseurl + url, data);
  }

  delete(url: string, data: any ,id:any) {
    console.log(data);
    return this.http.delete(this.baseurl + url, data);
  }









}
