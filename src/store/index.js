import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate';

import router from '../router/index';

Vue.use(Vuex);
let timeout;

export default new Vuex.Store({
	state: {
		error: null,
		isError: false,
		movies: {},
		movie: {},
	},
	plugins: [
		createPersistedState({
			storage: window.sessionStorage,
			reducer: (state) => ({
				movies: state.movies,
				movie: state.movie,

				//error: state.error,
			}),
		}),
	],

	getters: {
		getMovies: (state) => state.movies,
		getMovie: (state) => state.movie,
		getError: (state) => state.error,
		isError: (state) => state.isError,
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
			state.movies.filter((movie) => {
				movie.favorited = false;
			});
			router.push({ name: 'Movies' });
		},

		SET_MOVIE: (state, data) => {
			state.movie = data;
			state.movie.favorited = false;
			router.push({ name: 'MovieDetails' });
		},
		SET_FAV_MOVIE: (state, data) => {
			state.movies.filter((movie) => {
				if (movie.id === data) {
					movie.favorited = !movie.favorited;
				}
			});
			state.movie.favorited = !state.movie.favorited;
		},
	},
	actions: {
		async findMovies({ commit }, payload) {
			try {
				if (payload === null) {
					commit('ERROR', 'Please enter a value');

					timeout = setTimeout(() => {
						commit('CLEAR_ERROR');
					}, 3000);
				} else {
					const res = await axios.get(`search/${payload}`);
					console.log(res.data);
					commit('SET_MOVIES', res.data);
				}
			} catch (error) {
				console.error(error.response);
			}
		},

		async fetchMovie({ commit }, payload) {
			try {
				const res = await axios.get(`film/${payload}`);

				commit('SET_MOVIE', res.data);
			} catch (error) {
				console.error(error.response);
			}
		},
		addToFavorites({ commit }, payload) {
			commit('SET_FAV_MOVIE', payload);
		},
		setError({ commit }) {
			clearTimeout(timeout);
			commit('CLEAR_ERROR');
		},
	},
	modules: {},
});