<template>
  <v-container>
    <v-layout>
      <v-flex xs12>{{ msg }}</v-flex>
      <v-btn depressed color="default">Sweet Project</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: 'Or, Start Here!',
    },
  },
  data() {
    return {};
  },
};
</script>

<style>

</style>
