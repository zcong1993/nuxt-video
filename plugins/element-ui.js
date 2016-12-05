import Vue from 'vue'

if (process.BROWSER_BUILD) {
  const ElementUI = require('element-ui')
  Vue.use(ElementUI)
}