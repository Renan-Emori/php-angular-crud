import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  @Output() onSubmit = new EventEmitter<Product>();


  producteditform: FormGroup;
  id:number;
  data:any;
  product = new Product();
  formData = new FormData()

  constructor(private route:ActivatedRoute, private dataService: DataService, private formBuilder: FormBuilder){ }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];

    this.dataService.getProductById(this.id).subscribe(res => {
      this.data = res;
      this.product = this.data;
    });
    this.producteditform = this.formBuilder.group({
      name: new FormControl(),
      description: new FormControl(),
      price: new FormControl() ,
      image: new FormControl() // initial value for the form control
    })
  }

  get name(){
    return this.producteditform.get('name')
  }

  get description(){
    return this.producteditform.get('description')
  }

  get price(){
    return this.producteditform.get('price')
  }

  get image(){
    return this.producteditform.get('image')
  }

  

  getData(){
    this.dataService.getProductById(this.id).subscribe(res => {
      this.data = res;
      this.product = this.data;
      console.log(this.data)
    });
  }

  updateProduct(){
    this.dataService.updateData( this.id, this.producteditform.value ).subscribe(res => {
    });
  }
}
