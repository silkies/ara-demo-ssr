import { load, Vue, mountComponent, loadById } from 'hypernova-vue'
import Navbar from './components/Navbar.vue'

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faShoppingCart)

Vue.component('font-awesome-icon', FontAwesomeIcon)

const render = (name, { node, data }) => {
  if (name === 'Navbar') {
    return mountComponent(Vue.extend(Navbar), node, data)
  }
}

document.addEventListener('NovaMount', ({ detail }) => {
  const { name, id } = detail

  const payload = loadById(name, id)

  if (payload) {
    render(name, payload)
  }
})

load('Navbar').forEach(render.bind(null, 'Navbar'))
