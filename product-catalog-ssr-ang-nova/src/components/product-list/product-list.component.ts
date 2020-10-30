import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[] = [];
  p: number = 1;
  constructor(private rs : RestService) { }

  ngOnInit(): void {
    this.rs.getProducts().subscribe(
      (response) => {
        this.products = response;
      },
      (error) => console.log(error)
    )
  }

}
