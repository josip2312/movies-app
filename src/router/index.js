import Vue from 'vue';
import VueRouter from 'vue-router';
//import Index from '../views/Index.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Index',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Index.vue'),
	},
	{
		path: '/movies',
		name: 'Movies',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Movies.vue'),
	},
	{
		path: '/movies/details',
		name: 'MovieDetails',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/MovieDetails.vue'),
	},
	{
		path: '/movies/favorites',
		name: 'Favorites',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Favorites.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
