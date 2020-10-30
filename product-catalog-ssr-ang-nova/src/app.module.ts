import { NgModule, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ProductListModule } from './components/product-list/product-list.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductDetailModule } from './components/product-detail/product-detail.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const APP_ID = 'hypernova';

const components = {
  'ProductList': ProductListComponent,
  'ProductDetail': ProductDetailComponent
}

@NgModule({
  imports: [
    ProductListModule,
    HttpClientModule,
    NgxPaginationModule,
    FontAwesomeModule,
    ProductDetailModule,
    BrowserModule.withServerTransition({ appId: APP_ID }),
  ],
  entryComponents: [ProductListComponent, ProductDetailComponent]
})
export class AppModule {
  constructor (
    @Inject('Hypernova.Name') private name: string,
    @Inject('Hypernova.Node') private node: HTMLElement
    ){}

  ngDoBootstrap(app) {
    const Component = components[this.name]
    if (Component) {
      return app.bootstrap(Component, this.node)
    }
  };
}
