import Vue from 'vue';
import VueRouter from 'vue-router';

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
