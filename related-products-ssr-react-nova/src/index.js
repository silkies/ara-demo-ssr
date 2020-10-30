import hypernova from 'hypernova/server';
import { renderReact } from 'nova-react';
import express from 'express';
import path from 'path';

import RelatedProducts from './components/related-products/related-products';

hypernova({
  devMode: process.env.NODE_ENV !== 'production',
  getComponent(name) {
    if (name === 'RelatedProducts') {
      return renderReact(name, RelatedProducts);
    }

    return null;
  },
  port: process.env.PORT || 3003,

  createApplication() {
    const app = express();

    app.use('/public', express.static(path.join(process.cwd(), 'dist')));

    return app;
  },
});
