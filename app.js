import './src/scss/main.scss';
import './node_modules/normalizecss/normalize.css';

import countdownJS from './node_modules/countdown/countdown';
import particlesJS from './node_modules/particlesjs/src/particles';

countdownJS(
  new Date(2017, 11, 25),
  function (ts) {
    document.getElementById('daysValue').innerHTML = ts.days;
    document.getElementById('hoursValue').innerHTML = ts.hours;
    document.getElementById('minutesValue').innerHTML = ts.minutes;
    document.getElementById('secondsValue').innerHTML = ts.seconds;
  },
  countdownJS.DAYS | countdownJS.HOURS | countdownJS.MINUTES | countdownJS.SECONDS);

particlesJS.load('background', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});
