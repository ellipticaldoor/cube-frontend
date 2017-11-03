import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './feathers'

Vue.config.productionTip = false

const vm = new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App },
	store,
})

window.vm = vm
