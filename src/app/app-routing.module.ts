import { KidProductDetailComponent } from './kid-product-detail/kid-product-detail.component';
import { MenProductDetailComponent } from './men-product-detail/men-product-detail.component';
import { WomenProductDetailComponent } from './women-product-detail/women-product-detail.component';
import { AdminProductDetailComponent } from './admin-product-detail/admin-product-detail.component';
import { AddElementComponent } from './add-element/add-element.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { WomenProductsComponent } from './women-products/women-products.component';
import { KidProductsComponent } from './kid-products/kid-products.component';
import { MenProductsComponent } from './men-products/men-products.component';
import { CategoriesComponent } from './categories/categories.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './Products/Products.component';
import { ProductsDetailComponent } from './ProductsDetail/ProductsDetail.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './Cart/Cart.component';
import { TestGetsComponent } from './test-gets/test-gets.component';


const routes: Routes = [
  {path: ``, redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductsDetailComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'categories/Men/products', component: MenProductsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'categories/Men/products/:id', component: MenProductDetailComponent},
  {path: 'categories/Women/products', component: WomenProductsComponent},
  {path: 'categories/Women/products/:id', component: WomenProductDetailComponent},
  {path: 'categories/Kid/products', component: KidProductsComponent},
  {path: 'categories/Kid/products/:id', component: KidProductDetailComponent},
  {path: 'admin-panel', component: ProductAdminComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add-element', component: AddElementComponent},
  {path: 'admin-product-detail/:id', component: AdminProductDetailComponent},
  {path: 'cart', component: CartComponent},
  {path:'test',component:TestGetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
