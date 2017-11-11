import Vue from 'vue';
import App from './App';

import 'bulma/css/bulma.css';

Vue.config.productionTip = true;
Vue.config.devtools = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
});
