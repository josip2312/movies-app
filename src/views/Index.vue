<template>
	<main>
		<div class="container">
			<h1 class="heading-1">Find Your Favorite Movies</h1>

			<form @submit.prevent="findMovies(search)" class="search spacing">
				<div class="search-fields">
					<label for="search">Enter movie name</label>

					<div class="search-input">
						<input
							v-model="search"
							type="text"
							name="search"
							id="search"
						/>
						<img src="../assets/img/search.svg" alt="" />
					</div>
				</div>
				<button type="submit" class="btn search-btn">
					Search
				</button>
			</form>
		</div>
	</main>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	name: 'Index',
	data() {
		return {
			search: null,
		};
	},
	components: {},
	methods: {
		...mapActions(['findMovies']),
	},
};
</script>
<style lang="scss" scoped>
main {
	display: flex;
	justify-content: center;
	align-items: center;

	min-height: 91vh;
	padding: 0 1rem;
}
.container {
	background-color: $bg-color-2;
	padding: 5rem 2.5rem;
	box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
	text-align: center;
	margin-top: -5rem;
	animation: down 750ms ease-out forwards;
	.heading-1 {
		margin-bottom: 5rem;
	}
	.search {
		width: 100%;

		&-fields {
			width: 100%;
		}
		label {
			display: block;
			color: $grey-dark;
			font-size: 2rem;
			margin-bottom: 1rem;
		}
		.search-input {
			position: relative;
			width: 100%;
			max-width: 37.5rem;
			margin: 0 auto;
		}
		input {
			padding: 1rem 2rem;

			border: none;
			background-color: #c4c4c4;
			outline: none;
			width: 100%;

			margin: 0 auto;
			border-bottom: 1px solid #c4c4c4;
			transition: border 0.2s ease-in-out;
		}
		input:focus {
			border-bottom: 1px solid $font-headline;
		}
		img {
			width: 2.75rem;
			height: 2.75rem;
			position: absolute;
			top: 50%;
			right: 1rem;
			transform: translateY(-50%);
		}
	}
	.search-btn:hover {
		transform: scale(1.05);
	}
}
</style>
