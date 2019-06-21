<template>
  <v-container>
    <v-layout row wrap>
      <Store />
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
