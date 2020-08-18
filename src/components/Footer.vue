<template>
	<footer class="footer">
		<div class="footer-up">
			<img src="../assets/img/ig.svg" alt="" />
			<img src="../assets/img/linkedin.svg" alt="" />
			<img src="../assets/img/github.svg" alt="" />
		</div>

		<div class="footer-down">
			Developed by Ivancic Josip
		</div>
	</footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
	min-height: 25vh;
	padding: 1rem 0;
	width: 100%;
	background-color: $font-para;
	color: $grey;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	&-up {
		flex: 1;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 25%;
		img {
			width: 2.5rem;
			height: 2.5rem;
		}
	}
	&-down {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;

		font-size: 1.4rem;
	}
}
</style>
