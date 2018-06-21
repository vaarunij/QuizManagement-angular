import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs';
import 'rxjs/Rx';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UseraccountService {

urllogin:String= "http:vdv";

  constructor(private http:Http) { }

  loginSubmit(user)
  {
     return this.http.post("urllogin", user).map(res=>res.json());
  }
  
  registerSubmit(user)
  {
     return this.http.post("urllogin", user).map(res=>res.json());
  }

}
