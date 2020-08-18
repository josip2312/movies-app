<template>
	<section id="details">
		<div class="container" v-if="getMovie.title !== ''">
			<div class="movie-top">
				<div class="movie-main-info">
					<h2 class="title">
						{{ getMovie.title }}
					</h2>
					<div class="year">{{ getMovie.year }}</div>
					<div class="rating">
						<div class="rating-top">
							<span>
								<img
									src="../assets/img/emptystar.svg"
									alt="Star icon"
								/>
							</span>
							<span>{{ getMovie.rating }} <span>/10</span> </span>
						</div>

						<span class="votes"
							>{{
								new Intl.NumberFormat().format(
									getMovie.rating_votes,
								)
							}}
							votes</span
						>
					</div>
				</div>
				<div class="movie-sec-info">
					<span>{{ getMovie.length }}</span>
				</div>
			</div>
			<div class="movie-bottom">
				<div class="movie-image">
					<img :src="getMovie.poster" alt="" />
				</div>
				<div class="movie-plot">
					<p>{{ getMovie.plot }}</p>
					<div class="actors">
						<div
							class="actor"
							v-for="(star, index) in getMovie.cast.slice(0, 3)"
							:key="index"
						>
							<span>
								{{ star.actor }}
							</span>
							plays
							<span>
								{{ star.character }}
							</span>
						</div>
					</div>

					<a :href="getMovie.trailer.link" class="btn">
						See trailer
					</a>
				</div>
			</div>

			<div class="movie-details">
				<div class="cast">
					<h3 class="heading-3">All cast</h3>
					<div
						class="actor"
						v-for="(star, index) in getMovie.cast"
						:key="index"
					>
						<span>
							{{ star.actor }}
						</span>
						plays
						<span>
							{{ star.character }}
						</span>
					</div>
				</div>
				<div class="technical">
					<h3 class="heading-3">Technical aspects</h3>
					<div
						class="tech"
						v-for="(tech, index) in getMovie.technical_specs"
						:key="index"
					>
						<p v-html="tech[0]"></p>

						<p v-html="tech[1]"></p>
					</div>
				</div>
			</div>
		</div>
		<h1 class="heading-1" v-else>
			Sorry, there are no details for this movie.
		</h1>
	</section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: 'Details',
	computed: {
		...mapGetters(['getMovie']),
	},
};
</script>

<style lang="scss" scoped>
#details {
	display: flex;
	justify-content: center;
	align-items: center;

	min-height: 90vh;
	padding-bottom: 5rem;
}
.container {
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 75%;
	max-width: 120rem;
	margin: 0 auto;
	background-color: $bg-color-2;
	padding-bottom: 5rem;
	@media only screen and(max-width:$bp-smallest) {
		width: 85%;
	}
}

.movie-top {
	background-color: $bg-color-3;
	width: 100%;
	color: $font-headline;

	.movie-main-info {
		display: flex;
		align-items: center;

		padding-top: 2rem;
		width: 80%;

		margin: 0 auto;

		@media only screen and(max-width:$bp-smallest) {
			flex-direction: column;
			align-items: center;
		}

		h2 {
			font-size: 3rem;
			font-weight: 500;
			margin-right: 1rem;

			@media only screen and(max-width:$bp-smallest) {
				text-align: center;
				margin: 0;
			}
		}
		.year {
			@media only screen and(max-width:$bp-smallest) {
				margin-bottom: 1rem;
			}
		}
		.rating {
			display: flex;
			flex-direction: column;
			margin-left: auto;

			@media only screen and(max-width:$bp-smallest) {
				margin: 0;
				text-align: center;
				margin-bottom: 1rem;
			}

			.rating-top {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
			span {
				font-size: 2rem;
				span {
					color: $font-para;
					font-size: 1.4rem;
				}
			}
			.votes {
				font-size: 1.4rem;
			}
		}
	}
	.movie-sec-info {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;

		padding-bottom: 2rem;
		width: 80%;
		margin: 0 auto;
		span {
			font-size: 1.4rem;
			color: $font-para;
		}
	}
}
.movie-bottom {
	display: flex;

	width: 100%;
	min-height: 50vh;
	border-bottom: 1px solid $grey;
	padding-bottom: 5rem;
	@media only screen and(max-width:$bp-smaller) {
		flex-direction: column;
		align-items: center;
	}
}
.movie-image {
	flex: 1;
	display: block;
	text-align: center;
	img {
		border-radius: 3px;

		width: 100%;
		height: 100%;
		max-width: 40rem;
	}
}
.movie-plot {
	flex: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	max-width: 60ch;

	margin-top: 2rem;
	color: $font-headline;
	@media only screen and(max-width:$bp-medium) {
		flex: 1.5;
	}

	.actors {
		width: 75%;
		@media only screen and(max-width:$bp-smaller) {
			margin: 2rem;
		}
	}
	.actor {
		&:not(:last-child) {
			margin-bottom: 1rem;
		}
		span {
			font-weight: 500;
		}
		span:first-child {
			font-size: 1.8rem;
		}
	}
	p {
		@media only screen and(max-width:$bp-smaller) {
			margin-top: 1rem;
		}

		width: 75%;
		margin: 0 auto;
	}
	.btn {
		width: 75%;
	}
}
.movie-details {
	line-height: 1.8;
	margin-top: 5rem;
	width: 100%;
	padding: 0 2rem;
	.cast {
		margin-bottom: 5rem;
	}

	h3 {
		margin-bottom: 1rem;
		color: $font-headline;
	}

	.actor {
		color: $font-headline;
		span {
			font-weight: 500;
		}
		span:first-child {
			font-size: 1.8rem;
		}
	}
	.tech {
		max-width: 60ch;
		color: $font-headline;
		&:not(:first-child) {
			margin-bottom: 0.5rem;
		}
		p:first-child {
			font-weight: 500;
			font-size: 2rem;
		}
	}
}
</style>
