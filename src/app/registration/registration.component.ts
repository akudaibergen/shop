import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ConfirmedValidator } from './confirmed.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  confirmPassword;
  register;
  registrationForm: FormGroup;

  constructor(private apiService: ApiService, private location: Location, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.register = {
      username:'',
      password:''
  }
  this.confirmPassword='';
  this.registrationForm = this.fb.group(
    {
      userName : ['', [Validators.required,Validators.minLength(3)]],
      password : ['', [Validators.required,Validators.minLength(4)]],
      passwordConfirm : ['',[Validators.required,Validators.minLength(4)]],
    },
    { 
      validator: ConfirmedValidator('password', 'passwordConfirm')
    }
  )
}

onRegister(){
  
}


  registerUser(){
    if(this.confirmPassword==this.register.password){
    this.apiService.registerNewUser(this.register.username,this.register.password).subscribe(
        responce=>{
          alert('User '+this.register.username+' has been created')
          this.location.back();
        },
        error => alert('User name exists')
    );
  }
  else{
    alert('Passwords is not same');
  }
} 



}
