import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Location} from '@angular/common'
import { UserId } from 'src/models';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id='';
  user: UserId;
  username = '';
  password = '';
  loginForm: FormGroup;

  constructor(private apiService: ApiService, private location: Location) { }

  ngOnInit() {
    this.loginForm = new FormGroup(
      {
        email : new FormControl('',[Validators.required,Validators.minLength(3)]),
        password : new FormControl('',[Validators.required,Validators.minLength(4)]),
      }
    )
  }

  login(){
    this.apiService.loginUser(this.username,this.password).subscribe(res=>
      {
        localStorage.setItem('token', res.token);
        this.apiService.getUserId(this.username).subscribe(idq=>
          localStorage.setItem('userId',idq.id.toString())
          )
        this.username = '';
        this.password = '';
        this.location.back();
        alert('You are succesfully logged ');
      }
      );
  }

  onLogin(){

  }
}
