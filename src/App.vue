<template>
  <div class="countdownBackground">
    <div class="container">
      <div>
        <countdown-timer></countdown-timer>
      </div>
    </div>
  </div>
</template>

<script>
  import particlesJS from '../node_modules/particles.js/';
  import CountdownTimer from "./components/countdown-timer.vue";

  export default {
    name: 'App',
    components: {
      CountdownTimer
    },
    created: function () {
      particlesJS.load('app', '', function () {
        console.log('callback - particles.js config loaded');
      });
    }
  };
</script>

<style lang="scss" scoped>
  .countdownBackground {
    min-height: 100vh;
    background-size: cover;
    background: url("assets/dsc_9844.jpg") no-repeat center center fixed;
  }
</style>
