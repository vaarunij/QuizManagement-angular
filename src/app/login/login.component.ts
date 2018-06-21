import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UseraccountService } from '../useraccount.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm:FormGroup = new FormGroup({
   username:new FormControl('', Validators.required),
   password:new FormControl('', Validators.required),  
})

 constructor(private _router:Router, private _useraccountService:UseraccountService) { }


  ngOnInit() {
  }

  login(){
  this._useraccountService.loginSubmit(JSON.stringify(this.loginForm.value)).subscribe(data=> {console.log(data); this._router.navigate(['/login']);},
  )

  console.log(JSON.stringify(this.loginForm.value));

  }



}
