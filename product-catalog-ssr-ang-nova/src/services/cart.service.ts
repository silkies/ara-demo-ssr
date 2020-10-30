import { Injectable } from '@angular/core';
import { Product } from '../components/product';
import { CustomEventsService } from './custom-events.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  static cartKey = 'CART_PRODUCTS';

  constructor(private es: CustomEventsService) { }

  isQuantitySame(product: Product) {
    let products: Product[];

    products = JSON.parse(localStorage.getItem(CartService.cartKey));
    if (products) {
      const index = products.findIndex((x: any) => x.id === product.id);
      if (index > -1) {
        if (products[index].quantity === product.quantity) {
          return true;
        }
      }
    }
    return false;
  }

  getQuantityInCart(productInCart) {

    let products = [];

    products = JSON.parse(localStorage.getItem(CartService.cartKey));
    if (products) {
      const index = products.findIndex((x) => x.id === productInCart.id);
      if (index > -1) {
        return products[index].quantity;
      }
    }
    return 0;
  }

  addToCartQuantity(product: Product, quantity) {
    let products = [];

    products = JSON.parse(localStorage.getItem(CartService.cartKey));

    let productToAdd = JSON.parse(JSON.stringify(product));

    //if some products are in the cart
    if (products) {
      //if item is there, update quantity
      const index = products.findIndex((x) => x.id === product.id);
      if (index > -1) {

        //if quantity is less, add
        if ((products[index].quantity + quantity) <= product.quantity) {
          products[index].quantity = products[index].quantity + quantity;
        }
      } else {
        productToAdd.quantity = quantity;
        products.push(productToAdd);
      }
    } else {
      products = [];
      productToAdd.quantity = quantity;
      products.push(productToAdd);
    }

    localStorage.setItem(
      CartService.cartKey,
      JSON.stringify(products)
    );


    this.es.dispatchEvent(this.es.events.PRODUCT_ADDED);
  }


  addToCart(product: Product) {
    let products: Product[];

    products = JSON.parse(localStorage.getItem(CartService.cartKey));

    let productToAdd = JSON.parse(JSON.stringify(product));
    console.log(product);


    //if some products are in the cart
    if (products) {
      //if item is there, update quantity
      const index = products.findIndex((x: any) => x.id === product.id);
      if (index > -1) {

        //if quantity is less, add
        if (products[index].quantity < product.quantity) {
          console.log("less");
          products[index].quantity = products[index].quantity + 1;
        }
      } else {
        productToAdd.quantity = 1;
        products.push(productToAdd);
      }
    } else {
      products = [];
      productToAdd.quantity = 1;
      products.push(productToAdd);
    }

    localStorage.setItem(
      CartService.cartKey,
      JSON.stringify(products)
    );

    this.es.dispatchEvent(this.es.events.PRODUCT_ADDED);

  }
}
