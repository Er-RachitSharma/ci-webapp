import { ProductService } from './product-service';
import { Product } from './product';
import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'product-listing',
    template: `
        <button (click)="loadProducts()">Show products</button> <br>
        <div *ngFor="let p of products" class="card">
            <!-- <img src="{{ p.imageUrl }}" style="max-width:300px;"> -->
            <img [src]=p.imageUrl style="max-width:300px;">
            <div class="container">
                <h4><b>{{ p.name }}</b></h4>
                <p>{{ p.description }}</p>
                <p>Price: {{ p.price | currency: 'INR' }} </p>
            </div>
        </div>
    `,
    styles: [`
        .card {
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            width: 350px;
            float: left;
            padding: 10px;
            margin: 10px;
            border-radius: 10px;
        }
        .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.5);
        }
        .container {
            padding: 5px 16px;
        }
    `]

})
export class ProductListingComponent implements OnInit {

    products: Product[];

    //DI
    constructor(private ps: ProductService){

    }

    ngOnInit() {}

    loadProducts() {
        //If we use DI, we dont need to instantiate our service classes manually.
        //let ps: ProductService = new ProductService();
        this.products = this.ps.fetchProducts();
    }
}