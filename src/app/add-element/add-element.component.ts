import { Prodaction } from './../../models';
import { ApiService } from './../api.service';
import { Product } from './../../Shop';
import { Category_productService } from './../category_product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-element',
  templateUrl: './add-element.component.html',
  styleUrls: ['./add-element.component.css']
})
export class AddElementComponent implements OnInit {

  products: Prodaction[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts():void{
    this.apiService.getProductsList().subscribe(products => this.products = products);
  }

  deleteProduct(product: Product):void{
    // this.products = this.products.filter(p => p !== product);
    // this.category_productService.deleteProduct(product).subscribe();
  }

}
