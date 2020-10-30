<template>
<div>
<nav>
  <nova name="Navbar" :data="{ title: 'Ara Framework' }" />
</nav>
  <div class="container">
This is a home page  </div>
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
      { src: 'http://localhost:3001/public/client.js' }
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
