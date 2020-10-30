export class Product {
    id: number;
    name: string;
    price: string;
    quantity: number;
    color: string;
    image: string;
    description: string;
    isFavored: boolean;
    brand: string

    constructor(id, name, price, quantity, color, image, description, brand) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.color = color;
        this.image = image;
        this.description = description;
        this.isFavored = false;
        this.brand = brand;
    }
}
