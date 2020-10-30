import { mountComponent, loadById, load } from 'nova-react';

import RelatedProducts from './components/related-products/related-products'

const render = (name, { node, data }) => {
  if (name === 'RelatedProducts') {
    return mountComponent(RelatedProducts, node, data)
  }
}

document.addEventListener('NovaMount', ({ detail }) => {
  const { name, id } = detail

  const payload = loadById(name, id)

  if (payload) {
    render(name, payload)
  }
})

load('RelatedProducts').forEach(render.bind(null, 'RelatedProducts'))
