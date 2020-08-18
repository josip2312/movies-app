<template>
	<section id="movies">
		<div class="container">
			<Card
				v-for="(movie, index) in getMovies"
				:key="index"
				@click.native="fetchMovie(movie.id)"
			>
				<template v-slot:image>
					<img :src="movie.image" alt="" />
				</template>

				<template v-slot:content>
					{{ movie.title }}
				</template>
			</Card>
		</div>
	</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Card from '../components/Card';
export default {
	name: 'Movies',
	components: {
		Card,
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
	display: flex;

	justify-content: center;
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
	flex-wrap: wrap;
	@media only screen and(max-width: $bp-smaller) {
		justify-content: center;
		width: 90%;
	}
}
</style>
