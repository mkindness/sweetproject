<template>
  <v-layout>
    <v-flex xs12 pa-4>
      <v-layout row wrap>

        <v-flex v-for="(item, index) in items" :key="index" xs6 pa-2>
          <v-card>
            <v-layout row wrap>
              <v-flex xs4 pa-2>
                <a :href="item.url">
                  <img :src="item.image" />
                </a>
              </v-flex>
              <v-flex xs8 pa-2>
                <h2>{{ item.manufacturer }}</h2>
                <p>{{ item.productName }}</p>
                <p>{{ item.description }}</p>
                <p>{{ item.available }} in stock!</p>
                <p><strong>Price: {{ '$' + item.price }}</strong></p>
                <v-btn depressed color="indigo white--text" @click="addToCart(item)">Add To Cart</v-btn>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>

      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  import eventBus from '@utils/event-bus';

  export default {
    props: {
      items: {
        type: Array,
        default: () => {
          return [];
        }
      },
    },
    methods: {
      addToCart(item, quantity) {
        eventBus.$emit('addToCart', item);
      }
    },
    mounted() {
      // debugger;
    }
  }
</script>

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
