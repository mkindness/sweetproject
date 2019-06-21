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
                <v-btn class="add-cart" depressed color="indigo white--text" @click="addToCart(item)">Add To Cart</v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>

  </v-layout>
</template>

<script>
  import eventBus from '@utils/event-bus';
  import _ from 'underscore'

  export default {
    props: {
      items: {
        type: Array,
        default: () => {
          return []
        }
      },
    },
    data() {
      return {
        quantity: null,
      }
    },
    methods: {
      addToCart(item) {
        // @TODO check if item is in cart and disable button.
        item.cartQuantity = 1;
        eventBus.$emit('addToCart', item);
      },
      updateQuantity(item, quantity) {
        eventBus.$emit('updateQuantity', { item, quantity })
      }
    },
  }
</script>

<style lang="scss">
.add-cart {
  float: right;
}
</style>
