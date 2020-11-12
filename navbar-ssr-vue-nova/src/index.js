import hypernova from 'hypernova/server'
import { renderVue, Vue, renderVuex } from 'hypernova-vue/server'
import express from 'express'
import path from 'path'

import Navbar from './components/Navbar.vue'
import store from './store';


hypernova({
  devMode: process.env.NODE_ENV !== 'production',
  getComponent (name) {
    if (name === 'Navbar') {
      return renderVuex(name, Navbar, store);//renderVue(name, Vue.extend(Navbar))
    }
  },
  port: process.env.PORT || 3001,

  createApplication () {
    const app = express()

    app.use('/public', express.static(path.join(process.cwd(), 'dist')))

    return app
  }
})
