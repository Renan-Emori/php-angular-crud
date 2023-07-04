import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TruncatePipe } from './components/products/products.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

const appRoutes: Routes = [
  { path: '', component:ProductsComponent },
  { path: 'edit/:id', component:ProductEditComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    TruncatePipe,
    ProductEditComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
