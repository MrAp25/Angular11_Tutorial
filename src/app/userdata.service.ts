import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' //import API Module

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  
  constructor(private http:HttpClient) { }
  getApiData(){
    let url="https://jsonplaceholder.typicode.com/todos"; //import dummy API  
    return this.http.get(url);

  }
  
  getData(){
      return {
        name:'Ankit',
        age:27,
        contact:8866807490,
        indian:true
      }
    } 
}
