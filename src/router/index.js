import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Index',
		component: () =>
			import(/* webpackChunkName: "Index" */ '../views/Index.vue'),
	},
	{
		path: '/movies',
		name: 'Movies',
		component: () =>
			import(/* webpackChunkName: "Movies" */ '../views/Movies.vue'),
	},
	{
		path: '/movies/details',
		name: 'MovieDetails',
		component: () =>
			import(
				/* webpackChunkName: "MovieDetails" */ '../views/MovieDetails.vue'
			),
	},
];

const router = new VueRouter({
	mode: 'history',
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
	base: process.env.BASE_URL,
	routes,
});

export default router;
