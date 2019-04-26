<template>
  <div class="level-2">
    <level-three />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LevelThree from '@/components/LevelThree.vue'

export default Vue.extend({
  name: 'levelTwo',
  components: { LevelThree },
  data() {
    return {
    }
  }
});
</script>

<style lang="scss" scoped>
</style>