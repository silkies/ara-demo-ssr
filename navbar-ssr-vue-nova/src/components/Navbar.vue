<template>
  <div id="app">
    <div class="navbar">
      <div>
        <a href="/home" class="nav-link" active-class="active-nav-link">Home</a>
        <a href="/products" class="nav-link" active-class="active-nav-link">Products</a>
      </div>
      <div>
        <a href="/cart" class="nav-link" active-class="active-nav-link">
          <button class="btn-cart">
            <font-awesome-icon icon="shopping-cart" />
            <span class="badge">{{quantity}}</span>
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import store from "../store";


export default {
  name: "App",
  data() {
    return {
      quantity: this.getQuantity()
    };
  },
  watch: {
    quantity() {
      this.quantity = store.getters.getQuantityInCart;
    }
  },
  computed: {},
  methods: {
    getQuantity() {
      store.dispatch("computeProductsInCart");
      return store.getters.getQuantityInCart;
    },
    updateQuantity() {
      return store.dispatch("computeProductsInCart");
    }
  },
  mounted() {
    this.updateQuantity();
    window.addEventListener("PRODUCT_ADDED", () => {
      this.updateQuantity();
    });
  }
};
</script>
<style>
body {
  margin: 0;
}
.navbar {
  color: white;
  background-color: #333;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
}
.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: red;
  min-width: 20px;
  height: 20px;
  display: flex;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.btn-cart {
  border: none;
  background-color: transparent;
  color: white;
  font-size: 20px;
  position: static;
  cursor: pointer;
  width: 40px;
}
.nav-link {
  padding: 1.5rem;
  color: inherit;
  text-decoration: inherit;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

