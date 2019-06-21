<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-menu class="cart" menu-props="offsetY" open-on-hover allow-overflow center bottom transition="slide-y-transition">
        <Counter slot="activator" />
        <v-list>
          <v-list-tile v-for="(item, index) in cart" :key="index">
            <v-layout class="cart__items" row wrap>
              <v-flex xs3 pa-2>
                {{ item.manufacturer }}
              </v-flex>
              <v-flex xs3 pa-2>
                {{ item.productName }}
              </v-flex>
              <v-flex xs3 pa-2>
                Quantity: {{ item.cartQuantity }}
              </v-flex>
            </v-layout>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-flex>

  </v-layout>
</template>

<script>
  import Counter from '@components/Counter';

  export default {
    components: {
      Counter,
    },
    props: {
      cart: {
        type: Array,
        default: {
          return: [],
        }
      }
    }
  }

</script>

<style lang="scss">
.cart {
  &__items {
    background-color: white;
    width: 500px;
    li {
      display: block;
    }
  }
}
</style>

<!-- {
  image: 'https://media.sweetwater.com/images/items/120/SM57-medium.jpg',
  url: 'https://www.sweetwater.com/store/detail/SM57',
  manufacturer: 'Shure',
  productName: 'Sm57',
  itemid: 'SM57',
  quantity: 1,
  price: 99.00,
  description: 'Dynamic Microphone with Cardioid Pickup Pattern, 40Hz-15kHz Frequency Response, Low Impedance, Includes Stand Adapter, and Zippered Carrying Case',
  available: 9,
} -->
