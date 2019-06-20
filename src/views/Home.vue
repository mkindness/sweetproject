<template>
  <Start :msg="msg" />
</template>

<script>
import Start from '@components/Start.vue';

export default {
  components: {
    Start,
  },
  data() {
    return {
      msg: 'Start Here!',
    }
  },
};
</script>
