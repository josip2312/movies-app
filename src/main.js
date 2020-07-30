import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

import dotenv from 'dotenv';

dotenv.config();

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
axios.defaults.headers.common['x-rapidapi-host'] = process.env.VUE_APP_API_HOST;
axios.defaults.headers.common['x-rapidapi-key'] = process.env.VUE_APP_API_KEY;

axios.interceptors.response.use(
	function(response) {
		return response;
	},
	function(error) {
		store.commit('ERROR', error);
		return Promise.reject(error);
	},
);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');