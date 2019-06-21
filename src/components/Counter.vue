<template>
  <div>
    <v-badge right>
      <template v-slot:badge>
        <span>{{ count || 0 }}</span>
      </template>
      <v-icon>fas fa-shopping-cart</v-icon>
    </v-badge>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      this.$store.state.cart.length;
    }
  },
  mounted() {
  }
}
</script>
