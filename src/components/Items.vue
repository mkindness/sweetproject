<template>
  <v-layout row wrap>

    <v-flex v-for="(item, index) in items" :key="index" xs3 pa-4>
      <v-card>
        <v-layout row wrap>
          <v-flex xs12 pa-4>
            <a :href="item.url">
              <img :src="item.image" />
            </a>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12 pa-4>
            <h2>{{ item.manufacturer }}</h2>
            <p>{{ item.productName }}</p>
            <p>{{ item.description }}</p>
            <p>{{ item.available }} in stock!</p>
            <p><strong>Price: {{ '$' + item.price }}</strong></p>
            <v-layout>
              <v-flex xs12 pa-2>
                <v-btn v-if="itemInCart(item.itemid)" class="add-cart" depressed
                color="primary" @click="removeFromCart(item)">Remove</v-btn>
                <v-btn v-else class="add-cart" depressed color="indigo white--text"
                @click="addToCart(item)">Add To Cart</v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>

  </v-layout>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      quantity: null,
    };
  },
  methods: {
    addToCart(item) {
      // @TODO check if item is in cart and disable button.
      item.cartQuantity = 1;
      this.$store.dispatch('addItem', item);
    },
    updateQuantity(item, quantity) {
      this.$store.dispatch('updateQuantity', { item, quantity });
    },
    itemInCart(id) {
      // @TODO this will ensure that the Remove button changes back to Add To Cart
      // if the quantity goes to 0 in the Cart, but we really should just not let
      // them toggle the number field below 1
      const item = this.$store.state.cart.find(i => i.itemid === id);
      return item !== undefined && item.cartQuantity > 0 ? true : false;
    },
    removeFromCart(item) {
      this.$store.dispatch('removeItem', item);
    },
  },
};
</script>

<style lang="scss">
.add-cart {
  float: right;
}
</style>
