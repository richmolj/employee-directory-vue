<template>
  <div class="level-3">
    THREE {{ lastTitle }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'levelThree',
  data() {
    return {
    }
  },
  computed: {
    lastTitle() {
      let employee = this.$store.state.lastUpdated
      if (employee) {
        return employee.positions[0].title
      }
    }
  }
});
</script>

<style lang="scss" scoped>
</style>