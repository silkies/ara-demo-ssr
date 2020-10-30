<template>
<div>
<nav>
  <nova name="Navbar" :data="{ title: 'Ara Framework' }" />
</nav>
  <div class="container">
  <nova name="ProductList" :data="{ title: 'Ara Framework' }"  />
  </div>
</div>
</template>

<script>
import Nova from 'nova-vue-bridge'

export default {
  components: {
    Nova
  },
  head: {
    script: [
      { src: 'http://localhost:3001/public/client.js' },
      { src: 'http://localhost:3002/public/browser.js' }

    ]
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
