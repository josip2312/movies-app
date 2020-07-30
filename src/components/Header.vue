<template>
	<header>
		<nav>
			<h2 class="heading-2">
				Movies
			</h2>
			<ul>
				<router-link :to="{ name: 'Index' }" tag="li">
					<img src="../assets/img/home.svg" alt="" />
					<span>
						Home
					</span>
				</router-link>
				<router-link :to="{ name: 'Favorites' }" tag="li">
					<img src="../assets/img/favorites.svg" alt="" />
					<span>
						Favorites
					</span>
				</router-link>
			</ul>
		</nav>
		<div class="mobile-nav">
			<router-link :to="{ name: 'Index' }" tag="li">
				<img src="../assets/img/home.svg" alt="" />
				<span>
					Home
				</span>
			</router-link>
			<router-link :to="{ name: 'Favorites' }" tag="li">
				<img src="../assets/img/favorites.svg" alt="" />
				<span>
					Favorites
				</span>
			</router-link>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			windowWidth: window.innerWidth,
		};
	},

	computed: {
		isMobile() {
			return this.windowWidth <= 700;
		},
	},
};
</script>

<style lang="scss" scoped>
header {
	display: flex;
	align-items: center;

	background-color: $font-para;
	width: 100%;
	height: 9vh;
}
nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 75%;
	margin: 0 auto;
	h2 {
		flex: 2;
		@media only screen and(max-width:$bp-small) {
			text-align: center;
		}
	}

	ul {
		flex: 1;
		display: flex;
		justify-content: space-between;
		align-items: center;
		list-style: none;
		font-size: 1.8rem;
		@media only screen and(max-width:$bp-medium) {
			flex: 1.5;
		}
		@media only screen and(max-width:$bp-small) {
			display: none;
		}
		li {
			padding: 0.5rem 1.2rem;
			border-radius: 1rem;
			display: flex;
			align-items: center;
			cursor: pointer;
			img {
				margin-right: 1rem;
				width: 2.2rem;
				height: 2.2rem;
			}
		}
		li:hover {
			color: $font-headline;
			color: $grey;
		}
	}
}
.mobile-nav {
	display: none;
	@media only screen and(max-width:$bp-small) {
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: 9vh;

		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: $font-para;
		li {
			padding: 0.8rem 1.6rem;
			border-radius: 1rem;
			list-style: none;
			cursor: pointer;
			font-size: 1.8rem;
			display: flex;
			align-items: center;
			img {
				margin-right: 1rem;
				width: 2.2rem;
				height: 2.2rem;
			}
		}

		li:hover {
			color: $font-headline;
			color: $grey;
		}
	}
}
.router-link-exact-active {
	background-color: $accent;
}
</style>
