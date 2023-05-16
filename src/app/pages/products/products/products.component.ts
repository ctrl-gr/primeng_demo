import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  columns !: any[]
  products !: any[]
  constructor (private productService: ProductService) {}

  ngOnInit(): void {
   this.getProductList()
  }

  getProductList(){

    this.productService.getProducts().subscribe(
      (responce: any) => {
        this.columns = Object.keys(responce[0])
        console.log(this.columns)
        this.products= responce;
        console.log(this.products)
      }
    )
    console.log(this.columns)
    console.log(this.products)
  }
}
