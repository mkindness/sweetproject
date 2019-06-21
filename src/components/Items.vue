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
              <v-flex sm12 md12 lg6 pr-2>
                <v-text-field v-model="quantity" type="number" label="Quantity"></v-text-field>
              </v-flex>
              <v-flex sm12 md12 lg6 pa-2>
                <v-btn depressed color="indigo white--text" @click="addToCart(item)">Add To Cart</v-btn>
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

  export default {
    props: {
      items: {
        type: Array,
        default: () => {
          return [];
        }
      },
    },
    data() {
      return {
        quantity: '',
      }
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
