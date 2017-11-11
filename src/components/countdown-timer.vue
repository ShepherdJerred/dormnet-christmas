<template>
  <div>
    <div class="columns">
      <div class="column is-one-quarter countdownEntry">
        <div class="countdownValue">
          {{ christmasCountdown.days }}
        </div>
        <div class="countdownKey">
          days
        </div>
      </div>
      <div class="column is-one-quarter countdownEntry">
        <div class="countdownValue">
          {{ christmasCountdown.hours }}
        </div>
        <div class="countdownKey">
          hours
        </div>
      </div>
      <div class="column is-one-quarter countdownEntry">
        <div class="countdownValue">
          {{ christmasCountdown.minutes }}
        </div>
        <div class="countdownKey">
          minutes
        </div>
      </div>
      <div class="column is-one-quarter countdownEntry">
        <div class="countdownValue">
          {{ christmasCountdown.seconds }}
        </div>
        <div class="countdownKey">
          seconds
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import countdown from 'countdown';

  export default {
    name: 'Countdown-Timer',
    data: function () {
      return {
        christmasCountdown: countdown(new Date(2017, 11, 25))
      }
    },
    mounted() {
      setInterval(() => this.christmasCountdown = countdown(new Date(2017, 11, 25)), 1000);
    }
  };
</script>

<style lang="scss" scoped>
  .countdownEntry {
    color: #fff;
    font-family: Roboto, sans-serif;
    border: 1px solid rgba(255, 255, 255, .5);
    background: rgba(255, 255, 255, .25);
  }

  .countdownValue {
    font-size: 50px;
    font-weight: 800;
    text-align: center;
  }

  .countdownKey {
    font-size: 18px;
    font-weight: 400;
    text-align: center;
  }
</style>
