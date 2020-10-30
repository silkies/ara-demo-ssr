import 'core-js/features/reflect'
import 'zone.js';

import * as hypernova from 'hypernova/server'
import { renderAngular } from 'hypernova-angular/server'
import * as express from 'express'
import * as path from 'path'
import { ProductListComponent } from './components/product-list/product-list.component'
import { ProductListModule } from './components/product-list/product-list.module'

import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductDetailModule } from './components/product-detail/product-detail.module';

hypernova({
  devMode: process.env.NODE_ENV !== 'production',
  processJobsConcurrently: true,

  getComponent (name) {
    if (name === 'ProductList') {
      return renderAngular(name, ProductListComponent, ProductListModule)
    } else if (name === 'ProductDetail') {
      return renderAngular(name, ProductDetailComponent, ProductDetailModule)
    }
  },
  port: process.env.PORT || 3002,

  createApplication () {
    const app = express()

    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    app.use('/public', express.static(path.join(process.cwd(), 'dist')))

    return app
  }
})
