<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-menu class="cart" menu-props="offsetY" :close-on-content-click="false" open-on-hover center
      bottom transition="slide-y-transition">
        <Counter slot="activator" :count="count" />
        <ul class="cart__items">
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
                @input="updateQuantity(item, $event)"></v-text-field>
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
        <v-layout style="background-color: white;" row>
          <v-flex xs12 pa-2>
            <p style="display: block; text-align: right;">Subtotal: {{ subTotal }}</p>
          </v-flex>
        </v-layout>
      </v-menu>
    </v-flex>

  </v-layout>
</template>

<script>
import Counter from '@components/Counter.vue';
import eventBus from '@utils/event-bus';

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
      return this.$store.state.cart.length;
    },
    subTotal() {
      return this.calcSubTotal();
    },
  },
  methods: {
    // @TODO Need to investigate this more.
    // For some reason although the central state is updated with the new cartQuantity
    // it's not propagating down to the Cart child until the next event fires. ¯\_(ツ)_/¯
    calcSubTotal() {
      let amount = null;
      this.cart.forEach((item) => {
        const price = item.price * item.cartQuantity;
        amount += price;
      });
      return amount;
    },
    removeItem(item) {
      eventBus.$emit('removeFromCart', item);
    },
    updateQuantity(item, quantity) {
      // @TODO check to see it the quantity is >=  available stock.
      eventBus.$emit('updateQuantity', { item, quantity });
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
