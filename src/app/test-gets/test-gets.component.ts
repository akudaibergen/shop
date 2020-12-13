import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Prodaction, Company } from 'src/models';

@Component({
  selector: 'app-test-gets',
  templateUrl: './test-gets.component.html',
  styleUrls: ['./test-gets.component.css']
})
export class TestGetsComponent implements OnInit {

  productions:Prodaction[]=[];
  companies:Company[]=[];

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.getProductList();
  }
  getProductList(){
    this.apiService.getProductsList().subscribe(productions => this.productions=productions);
  }
  getCompanyList(){
    this.apiService.getCompaniesList().subscribe(companies=>this.companies=companies);
  }
}
