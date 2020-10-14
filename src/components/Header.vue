<template>
	<header>
		<nav>
			<router-link :to="{ name: 'Index' }" class="heading-2" tag="h2">
				Movies
			</router-link>
			<ul>
				<li>
					<router-link :to="{ name: 'Index' }" class="nav-link">
						<svg width="24" height="24" viewBox="0 0 24 24">
							<path
								fill="#fcfcfc"
								d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"
							/>
						</svg>
						<span>
							Search
						</span>
					</router-link>
				</li>
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

	width: 80%;
	margin: 0 auto;
	max-width: 120rem;
	.heading-2 {
		cursor: pointer;
	}

	ul {
		display: flex;
		justify-content: flex-end;
		align-items: center;

		list-style: none;
		font-size: 1.8rem;

		li {
			border-radius: 1rem;
			cursor: pointer;

			a {
				display: flex;
				align-items: center;
			}
			svg {
				margin-right: 1rem;
				width: 2.2rem;
				height: 2.2rem;
			}
		}
		li:hover {
			opacity: 0.8;
		}
	}
}
</style>
