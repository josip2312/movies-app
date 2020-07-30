<template>
	<main>
		<div class="container">
			<h1 class="heading-1">Find Your Favorite Movies</h1>

			<form @submit.prevent="findMovies(search)" class="search">
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
				<button type="submit" class="btn">
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

	min-height: 91vh;
	padding: 0 2rem;
}
.container {
	background-color: $bg-color-2;
	margin-top: 10rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	padding: 3rem;
	height: 55vh;
	box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
	text-align: center;
	.search {
		height: 70%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		text-align: center;
		&-fields {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			//align-items: center;
			width: 100%;
			height: 50%;
		}
		label {
			color: $font-headline;
			font-size: 1.8rem;
		}
		.search-input {
			position: relative;
		}
		input {
			padding: 1.2rem 2rem;
			border-radius: 1rem;
			border: none;
			background-color: #c4c4c4;
			outline: none;
			width: 75%;
			margin: 0 auto;
			border-bottom: 1px solid #c4c4c4;
			transition: all 0.2s ease;
		}
		input:focus {
			border-bottom: 1px solid $font-headline;
		}
		img {
			top: 0.6rem;
			right: 15%;
			position: absolute;
		}
	}
	.btn {
		padding: 1.3rem 2.6rem;
		//width: ;
	}
}
</style>
