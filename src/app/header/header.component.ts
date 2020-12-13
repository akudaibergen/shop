import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private location:Location, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  logout(){
    localStorage.clear();
  }

  checkLogin(){
    let token = localStorage.getItem('token');
    if(token != null){
      alert('You are logged');
      this.location.back();
    }

  }

}
