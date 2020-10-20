import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate';

import router from '../router/index';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		error: null,
		isError: false,
		loading: false,

		movies: [],
		movie: {},
	},
	plugins: [
		createPersistedState({
			storage: window.sessionStorage,
			reducer: (state) => ({
				movies: state.movies,
				movie: state.movie,
				loading: state.loading,
			}),
		}),
	],

	getters: {
		getMovies: (state) => state.movies,
		getMovie: (state) => state.movie,
		getError: (state) => state.error,
		isError: (state) => state.isError,
		isLoading: (state) => state.loading,
	},
	mutations: {
		ERROR: (state, data) => {
			state.error = data;
			state.isError = true;
		},
		CLEAR_ERROR: (state) => {
			state.isError = false;
		},

		SET_MOVIES: (state, data) => {
			state.movies = data.titles;
		},

		SET_MOVIE: (state, data) => {
			state.movie = data;
		},
	},
	actions: {
		async findMovies({ commit }, payload) {
			try {
				if (payload === null) {
					commit('ERROR', 'Please enter a value');
					setTimeout(() => {
						commit('CLEAR_ERROR');
					}, 2000);
				} else {
					const res = await axios.get(`search/${payload}`);
					commit('SET_MOVIES', res.data);
					router.push({ name: 'Movies' });
				}
			} catch (error) {
				console.error(error.response);
			}
		},

		async fetchMovie({ commit }, payload) {
			try {
				const res = await axios.get(`film/${payload}`);
				commit('SET_MOVIE', res.data);
				router.push({ name: 'MovieDetails' });
			} catch (error) {
				console.error(error.response);
			}
		},

		clearError({ commit }) {
			commit('CLEAR_ERROR');
		},
	},
});
