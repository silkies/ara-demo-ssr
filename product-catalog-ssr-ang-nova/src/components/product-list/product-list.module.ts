import { NgModule } from '@angular/core'
import { ProductListComponent } from './product-list.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductCardComponent } from '../product-card/product-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ProductListComponent, ProductCardComponent],
  imports: [
    NgxPaginationModule,
    FontAwesomeModule,
    CommonModule
  ]
})
export class ProductListModule { }