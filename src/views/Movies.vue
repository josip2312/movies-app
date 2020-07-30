<template>
	<section id="movies">
		<div class="wrapper">
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
	align-items: center;
	background-color: $bg-color-2;
	min-height: 91vh;
	position: relative;
}

.wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
}
.container {
	display: flex;
	align-items: center;
	justify-content: flex-start;

	flex-wrap: wrap;

	padding: 5rem 0;
	width: 80%;
	//margin: 0 auto;
	@media only screen and(max-width: $bp-small) {
		width: 90%;
	}
	@media only screen and(max-width: $bp-smallest) {
		justify-content: center;
	}
}
</style>
