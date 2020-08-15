import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <form (ngSubmit)="add()">
      Enter Product ID : <input type="number" name="t1" [(ngModel)]=product.id > <br>
      Enter Name : <input type="text" name="t2" [(ngModel)]=product.name > <br>
      Enter Price : <input type="number" name="t3" [(ngModel)]=product.price > <br>
      <button type="submit">Add button</button>
    </form>
  `,
  styles: [
  ]
})
export class AppProductComponent {

  product: Product = new Product();

  constructor(private http: HttpClient) { }

  add() {
    //alert(JSON.stringify(this.product));
    let url = "http://localhost:8181/RESTApp/api/product/add";
    this.http.post<Product>(url, this.product).subscribe(data => {
      alert(data);
    })
  }

}

export class Product {
  id: number;
  name: string;
  price: number;
}
