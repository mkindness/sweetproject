<template>
  <div>
    <p>Count: {{ length }}</p>
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
