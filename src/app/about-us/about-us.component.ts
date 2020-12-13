import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private location:Location,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goBack():void{
    this.location.back();
  }

}
