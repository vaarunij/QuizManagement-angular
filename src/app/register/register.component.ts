import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UseraccountService } from '../useraccount.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

registerForm:FormGroup = new FormGroup({
   username:new FormControl('', Validators.required),
   email:new FormControl('', Validators.required),
   password:new FormControl('', Validators.required)  
})
constructor(private _router:Router, private _useraccountService:UseraccountService) { }
  ngOnInit() {
}
register(){
  this._useraccountService.registerSubmit(JSON.stringify(this.registerForm.value)).subscribe(data=> {console.log(data); this._router.navigate(['/quizOption']);},
)
console.log(JSON.stringify(this.registerForm.value));

 }
}