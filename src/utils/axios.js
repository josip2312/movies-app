import store from '@/store';
import axios from 'axios';

import dotenv from 'dotenv';

dotenv.config();

//setting base url and headers for all api requests
axios.defaults.baseURL = process.env.VUE_APP_BACKEND_URL;
axios.defaults.headers.common['x-rapidapi-host'] = process.env.VUE_APP_API_HOST;
axios.defaults.headers.common['x-rapidapi-key'] = process.env.VUE_APP_API_KEY;

axios.interceptors.request.use((config) => {
	store.state.loading = true;
	return config;
});

axios.interceptors.response.use(
	function(response) {
		store.state.loading = false;
		return response;
	},
	function(error) {
		store.commit('ERROR', error);
		store.state.loading = false;
		return Promise.reject(error);
	},
);
