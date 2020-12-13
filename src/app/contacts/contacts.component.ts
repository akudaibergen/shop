import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private location:Location,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goBack():void{
    this.location.back();
  }
}
