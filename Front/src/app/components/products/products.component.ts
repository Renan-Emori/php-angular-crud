import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : any;

  constructor(private dataService:DataService){
    this.getProductData();
  }

  ngOnInit(): void{}

  getProductData():void {
    this.dataService.getData().subscribe(res => {
      this.products = res;
      console.log(this.products)
    });
  }

  product = new Product();
  insertData():void{
    this.dataService.insertData(this.product).subscribe((res:any)=>{
      this.getProductData();
    })
  }

  deleteData(id:number){
    this.dataService.deleteData(id).subscribe(res => {
      this.getProductData();
    });
  }

}


@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number): string {
    if (value.length <= limit) {
      return value;
    }
    return value.slice(0, limit) + '...';
  }
}