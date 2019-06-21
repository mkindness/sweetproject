<template>
  <v-container>
    <v-toolbar color="indigo" dark fixed app>
      <v-layout row wrap>
        <v-flex xs10>
          <h1>Sweet Shopping Cart</h1>
        </v-flex>
        <v-flex xs2>
          <Counter />
        </v-flex>
      </v-layout>
    </v-toolbar>
    <v-layout>
      <v-flex xs9>
        <Items :items="items" />
      </v-flex>
      <v-flex xs3>
        <Cart :cart="cart" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Items from '@components/Items.vue';
  import Cart from '@components/Cart.vue';
  import Counter from '@components/Counter.vue';
  import eventBus from '@utils/event-bus';
  import { mapState } from 'vuex';
  import _ from 'underscore';

export default {
  components: {
    Items,
    Cart,
    Counter,
  },
  data() {
    return {};
  },
  computed: mapState([
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
