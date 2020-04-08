import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Business } from '../Models/Business';

@Injectable({
  providedIn: 'root'
})
export class BusinessServiceService {

  constructor(private http:HttpClient) { }

  url:string = 'http://127.0.0.1:8000/api/business';

  //get all businesses
  getBusinesses():Observable<Business[]>{

    return this.http.get<Business[]>(this.url);
    


  }

  //add a new business
  addBusiness(){
    
  }

   //get one business
   getOne(){

  }

  //update a busness
  editBusiness(){

  }

  //deleting a business
  deleteBusiness(){

  }
}
