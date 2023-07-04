import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private ApiUrl = 'http://127.0.0.1:8000/api/products/';
  private body = { key: 'value' };
  private options = {}
  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get(this.ApiUrl);
  }

  insertData(data:any){
    return this.httpClient.post(this.ApiUrl, data);
  }

  deleteData(id:number){
    return this.httpClient.delete(this.ApiUrl+id);
  }

  getProductById(id:number){
    return this.httpClient.get(this.ApiUrl+id)
  }

  updateData(id:number,data:any){
    return this.httpClient.put(this.ApiUrl+id, data);
  }
}
