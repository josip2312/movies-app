<template>
	<section id="details">
		<div class="container" v-if="getMovie.title !== ''">
			<div class="movie-top">
				<div class="movie-main-info">
					<h2 class="heading-2 title">
						{{ getMovie.title }}
					</h2>
					<div class="year">{{ getMovie.year }}</div>
					<div class="rating">
						<div class="rating-top">
							<img
								src="../assets/img/emptystar.svg"
								alt="Star icon"
							/>

							<span>{{ getMovie.rating }} <span>/10</span> </span>
						</div>

						<span class="votes"
							>{{
								new Intl.NumberFormat().format(
									getMovie.rating_votes,
								)
							}}
							votes
						</span>
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
				<div class="movie-plot spacing-lg">
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

					<a
						v-if="getMovie.trailer.link"
						:href="getMovie.trailer.link"
						class="btn"
						target="_blank"
					>
						See trailer
					</a>
					<button v-else href="" class="btn disabled" disabled>
						Trailer not avaliable
					</button>
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
	min-height: 90vh;
}
.container {
	display: flex;
	flex-direction: column;

	width: 80%;
	max-width: 120rem;
	margin: 0 auto;
	background-color: $bg-color-2;
	padding-bottom: 5rem;
	@media only screen and(max-width:$v-5) {
		width: 90%;
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
		max-width: 100rem;

		margin: 0 auto;

		@media only screen and(max-width:$v-5) {
			flex-direction: column;
			align-items: center;
		}

		.heading-2 {
			font-weight: 500;
			margin-right: 1rem;

			@media only screen and(max-width:$v-5) {
				text-align: center;
				margin: 0;
			}
		}
		.year {
			margin-right: 2rem;
			@media only screen and(max-width:$v-5) {
				margin-right: 0;
				margin-bottom: 1rem;
			}
		}
		.rating {
			margin-left: auto;

			@media only screen and(max-width:$v-5) {
				margin: 0;
				text-align: center;
			}

			.rating-top {
				display: flex;
				align-items: center;
				img {
					flex-shrink: 0;
					width: 2.5rem;
					height: 2.5rem;
					margin-right: 1.5rem;
				}
				span {
					flex-shrink: 0;
					font-size: 2rem;
					span {
						color: $font-para;
						font-size: 1.4rem;
					}
				}
			}

			.votes {
				font-size: 1.4rem;
			}
		}
	}
	.movie-sec-info {
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
	@media only screen and(max-width:$v-7) {
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
		object-fit: cover;
		max-width: 50rem;
	}
}
.movie-plot {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	padding: 3rem 2rem;
	color: $font-headline;

	.actors,
	p,
	.btn {
		max-width: 50ch;
	}

	.actors {
		width: 90%;
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
		@media only screen and(max-width:$v-7) {
			margin-top: 5rem;
		}

		width: 90%;

		margin: 0 auto;
	}
	.btn {
		width: 90%;
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
