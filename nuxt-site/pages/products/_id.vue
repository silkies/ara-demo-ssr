<template>
  <div>
    <nav>
      <nova name="Navbar" :data="{ title: 'Ara Framework' }" />
    </nav>
    <div>
      <div>
        <nova name="ProductDetail" :data="{ title: 'Ara Framework' }" />
    </div>
     <div>
        <nova name="RelatedProducts" :data="{ title: 'Ara Framework' }" />
    </div>
    </div>
  </div>
</template>

<script>
import Nova from "nova-vue-bridge";

export default {
  components: {
    Nova
  },
  head: {
    script: [
      { src: 'http://localhost:3001/public/client.js' },
      { src: 'http://localhost:3002/public/browser.js' },
      { src: 'http://localhost:3003/public/client.js' }
    ]
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>