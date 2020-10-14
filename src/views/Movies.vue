<template>
	<section id="movies">
		<div class="container">
			<MovieCard
				v-for="(movie, index) in getMovies"
				:key="index"
				@click.native="fetchMovie(movie.id)"
			>
				<template #image>
					<img :src="movie.image" alt="" />
				</template>

				<template #content>
					{{ movie.title }}
				</template>
			</MovieCard>
		</div>
	</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import MovieCard from '../components/MovieCard';
export default {
	name: 'Movies',
	components: {
		MovieCard,
	},
	computed: {
		...mapGetters(['getMovies', 'getMovie']),
	},
	methods: {
		...mapActions(['fetchMovie']),
	},
};
</script>

<style lang="scss" scoped>
#movies {
	background-color: $bg-color-2;
	position: relative;
}

.container {
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	background-color: #ededed;
	padding: 5rem 0;
	width: 80%;
	min-height: 91vh;
	margin: 0 auto;
	max-width: 120rem;
	flex-wrap: wrap;
	@media only screen and(max-width: $v-7) {
		justify-content: center;
	}
}
</style>
