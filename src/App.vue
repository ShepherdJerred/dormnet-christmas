<template>
  <div id="app">
    <div>
      <h1 class="title is-size-1">Time until Christmas</h1>
    </div>
    <countdown-timer></countdown-timer>
  </div>
</template>

<script>
  import CountdownTimer from "./components/countdown-timer.vue";

  export default {
    name: 'App',
    components: {
      CountdownTimer
    }
  };
</script>

<style lang="scss" scoped>
  #app {
    background: url();
    
  }
</style>
