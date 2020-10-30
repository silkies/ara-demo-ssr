import { Component, OnInit, Input } from '@angular/core';
import { faHeart as faEmptyHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faFilledHeart } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(private cs: CartService) { }
  faEmptyHeart = faEmptyHeart;
  faFilledHeart = faFilledHeart;
  @Input() product: Product;

  isQuantInCartSame(): boolean {
    return this.cs.isQuantitySame(this.product);
  }


  ngOnInit(): void {
  }

  handleAddToCart() {
    this.cs.addToCart(this.product);
  }

}
