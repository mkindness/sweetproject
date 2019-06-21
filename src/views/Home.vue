<template>
  <v-container fluid>
    <Store />
    <v-layout row wrap>
      <v-flex xs12>
        <h2>Thanks for testing my skillz.</h2>
        <p>There was a lot that could be done and I tried to do as much as possible in the shortest
           amount of time.</p>
        <p>I ran into a hangup that I haven't expereienced yet. Although when you update quantities
          in the Cart component, the computed props<br/> don't pick up the change even though the
          proper mutaion of the central store state is updated. It does, however update on the very
          next event whether it be adding<br/> something else to the cart or updating the quantity
          of a different item in the cart.</p>
        <p>Also, I didn't take the time to disable Add To Cart buttons so that you couldn't add
          multiiples of the same product to the cart.<br/> Nor did I guard against adding more
          quanitities of an item that there are available in stock.</p>
        <p>Thanks! ~Matt Kindness</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Store from '@components/Store.vue';

export default {
  components: {
    Store,
  },
};
</script>
