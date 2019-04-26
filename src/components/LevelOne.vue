<template>
  <div class="level-1">
    <level-two></level-two>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LevelTwo from '@/components/LevelTwo.vue'

export default Vue.extend({
  name: 'levelOne',
  components: { LevelTwo },
  data() {
    return {
    }
  }
});
</script>

<style lang="scss" scoped>
</style>