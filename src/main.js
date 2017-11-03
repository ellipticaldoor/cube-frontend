import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

const vm = new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App },
})

window.vm = vm
