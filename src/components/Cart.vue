<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-menu class="cart" menu-props="offsetY" :close-on-content-click="false" open-on-hover center
      bottom transition="slide-y-transition">
        <Counter slot="activator" :count="count" />
        <div class="cart__items" v-if="isEmpty(cart)">
          <p style="display: block; text-align: center; margin: 0; padding: 24px 0;">You cart is empty, bro!</p>
        </div>
        <div class="cart__items" v-else>
          <ul>
            <li v-for="(item, index) in cart" :key="index">
              <v-layout row wrap>
                <v-flex class="text-center" xs2 pa-2>
                  <img :src="item.image" />
                </v-flex>
                <v-flex xs2 pa-2>
                  {{ item.manufacturer }}
                </v-flex>
                <v-flex xs2 pa-2>
                  {{ item.productName }}
                </v-flex>
                <v-flex xs2 pa-2>
                  <v-text-field type="number" label="Quantity" :value="item.cartQuantity"
                  @input="updateQuantity(item, $event)" :max="item.available"></v-text-field>
                </v-flex>
                <v-flex xs2 pa-2>
                  {{ '$' + item.price * item.cartQuantity }}
                </v-flex>
                <v-flex xs2 pa-2>
                  <v-icon @click="removeItem(item)">fas fa-times-circle</v-icon>
                </v-flex>
              </v-layout>
            </li>
          </ul>
        </div>
        <v-layout style="background-color: white;" row>
          <v-flex xs12 pa-2>
            <p style="display: block; text-align: right;">Subtotal: {{ '$' + subTotal }}</p>
          </v-flex>
        </v-layout>
      </v-menu>
    </v-flex>

  </v-layout>
</template>

<script>
import Counter from '@components/Counter.vue';
import _ from 'underscore';

export default {
  components: {
    Counter,
  },
  props: {
    cart: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    count() {
      return this.calcCartCount();
    },
    subTotal() {
      return this.calcSubTotal();
    },
  },
  methods: {
    calcSubTotal() {
      let amount = 0;
      this.cart.forEach((item) => {
        const price = item.price * item.cartQuantity;
        amount += price;
      });
      return amount;
    },
    isEmpty(params) {
      return _.isEmpty(params);
    },
    removeItem(item) {
      this.$store.dispatch('removeItem', item);
    },
    updateQuantity(item, quantity) {
      // @TODO check to see if the quantity is >=  available stock.
      this.$store.dispatch('updateQuantity', { item, quantity });
      // I don't think this is the best UX, but it works.
      if (item.cartQuantity === '0') {
        this.removeItem(item);
      }
    },
    calcCartCount() {
      const sum = this.cart.reduce((s, f) => s + +f.cartQuantity, 0);
      return sum;
    },
  },
};
</script>

<style lang="scss">
.cart {
  &__items {
    background-color: white;
    width: 600px;
    padding: 0;
    li {
      list-style: none;
    }
    img {
      max-height: 24px;
      margin: 0 auto;
    }
  }
  .v-list {
    &__tile {
    }
  }
}
</style>
