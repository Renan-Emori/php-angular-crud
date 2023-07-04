import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  @Output() onSubmit = new EventEmitter<Product>();
  productForm: FormGroup;
  products : any;

  ngOnInit():void{
    this.productForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      price: new FormControl('',[Validators.required]) ,
      image: new FormControl('',[Validators.required])
    })
  }

  get name(){
    return this.productForm.get('name')!
  }

  get description(){
    return this.productForm.get('description')!
  }

  get price(){
    return this.productForm.get('price')!
  }

  get image(){
    return this.productForm.get('image')!
  }


  constructor(private dataService:DataService, private router: Router){
    this.getProductData();
  }

  getProductData():void {
    this.dataService.getData().subscribe(res => {
      this.products = res;
    });
  }
  
  product = new Product();
  insertData():void{
    if(this.productForm.invalid){
      return;
    }
    
    this.dataService.insertData(this.productForm.value).subscribe((res:any)=>{
      this.getProductData();
    })
    this.router.navigate(['/'])
  }

  submit(){
    if(this.productForm.invalid){
      return;
    }

    console.log(this.productForm.value)
  }
}
