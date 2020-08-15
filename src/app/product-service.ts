import { Product } from './product';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

    fetchProducts(): Product[] {
        return [
            new Product("Redmi 8", "Xiomi Redmi 8", 9999, "https://rukminim1.flixcart.com/image/312/312/k1fbmvk0/mobile/k/b/e/mi-redmi-8-mzb8250in-original-imafhyabpggagngr.jpeg?q=70"),
            new Product("Realmi 5i", "Oppo Realmi 5i", 10999, "https://rukminim1.flixcart.com/image/312/312/k65d18w0pkrrdj/mobile/y/a/z/realme-5i-rmx2030-original-imafnsx5bj4yqhas.jpeg?q=70"),
            new Product("POCO X2", "Xiomi POCO X2", 18499, "https://rukminim1.flixcart.com/image/312/312/k65d18w0/mobile/4/k/4/poco-x2-mzb9011in-original-imafzz2hbfkvftm5.jpeg?q=70")
        ];
    }
}