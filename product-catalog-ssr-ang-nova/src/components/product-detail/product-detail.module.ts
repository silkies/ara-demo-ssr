import { NgModule } from '@angular/core'
import { ProductDetailComponent } from './product-detail.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    FontAwesomeModule,
    CommonModule
  ]
})
export class ProductDetailModule { }