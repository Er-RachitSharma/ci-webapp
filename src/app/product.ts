export class Product {
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(name?: string, description?: string, price?: number, imgUrl?: string) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imgUrl;
    }

}