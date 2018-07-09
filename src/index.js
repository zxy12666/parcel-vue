import Vue from 'vue'
import app from './app'
import router from './router'
import "babel-polyfill";
import './index.less'


new Vue({
  router,
  el: 'app',
  render: h => h(app)
})