<template>
  <div>
    <v-badge right>
      <template v-slot:badge>
        <span>{{ count }}</span>
      </template>
      <v-icon>fas fa-shopping-cart</v-icon>
    </v-badge>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
};
</script>
