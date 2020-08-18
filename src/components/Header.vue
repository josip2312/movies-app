<template>
	<header>
		<nav>
			<router-link :to="{ name: 'Index' }" class="heading-2" tag="h2">
				Movies
			</router-link>
			<ul>
				<router-link :to="{ name: 'Index' }" tag="li">
					<img src="../assets/img/home.svg" alt="" />
					<span>
						Home
					</span>
				</router-link>
			</ul>
		</nav>
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
		flex: 1;
		justify-self: flex-start;
	}

	ul {
		flex: 1;
		display: flex;
		justify-content: flex-end;
		align-items: center;

		list-style: none;
		font-size: 1.8rem;

		li {
			display: flex;
			align-items: center;

			border-radius: 1rem;
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
</style>
