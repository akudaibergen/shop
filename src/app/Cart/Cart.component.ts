import { Prodaction } from 'src/models';
import { ApiService } from './../api.service';
import { ProductsComponent } from './../Products/Products.component';
import { CartService } from './../Cart.service';
import { Component, OnInit, Query } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-Cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.css']
})
export class CartComponent implements OnInit {

  items: Prodaction[] = [];
  productId: number[] = [];

  constructor(
    private cartservice: CartService,
    private route: ActivatedRoute,
    private location: Location,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.items = this.cartservice.getItems();
  }

  clearCart(){
    this.items.length = 0;
  }
  goBack(){
    this.location.back();
  }

  getProductIdes(): number[]{
    for (let i in this.items){
      this.productId.push(this.items[i].id);
    }
    return this.productId;
  }

  buyItems(){
    let check = localStorage.getItem('token');
    if(check != null){
        this.apiService.createOrder(parseInt(localStorage.getItem('userId')),this.getProductIdes()).subscribe();
        alert('You order is received');
        this.items.length = 0;
    }
    else{
      window.alert('Make a authorization');
    }
  }
}
