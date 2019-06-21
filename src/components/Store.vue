<template>
  <v-container>
    <v-toolbar color="indigo" dark fixed app>
      <v-layout row wrap>
        <v-flex xs10>
          <h1>Sweet Shopping Cart</h1>
        </v-flex>
        <v-flex xs2>
          <Cart :cart="cart" />
        </v-flex>
      </v-layout>
    </v-toolbar>
    <v-layout>
      <v-flex xs12>
        <Items :items="items" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Items from '@components/Items.vue';
  import Cart from '@components/Cart.vue';
  import eventBus from '@utils/event-bus';
  import { mapGetters } from 'vuex';
  import _ from 'underscore';

export default {
  components: {
    Items,
    Cart,
  },
  data() {
    return {
    };
  },
  computed: mapGetters([
    'items',
    'cart',
  ]),
  created() {
    if (_.isEmpty(this.$store.state.items)) {
      this.dispatchAction('loadItems');
    }
    eventBus.$on('addToCart', (item) => {
      this.dispatchAction('addItem', item);
    });
    eventBus.$on('removeFromCart', (item) => {
      this.dispatchAction('removeItem', item);
    });
    eventBus.$on('updateQuantity', (payload) => {
      this.dispatchAction('updateQuantity', payload);
    });
  },
  methods: {
    async dispatchAction(action, payload) {
      await this.$store.dispatch(action, payload);
    },
  }
};
</script>

<style>

</style>
