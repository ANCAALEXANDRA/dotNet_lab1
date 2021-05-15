import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  public products: Product[];

  constructor(http: HttpClient, @Inject('API_URL') apiUrl: string) {
    http.get<Product[]>(apiUrl + 'product').subscribe(result => {
      this.products = result;
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}
