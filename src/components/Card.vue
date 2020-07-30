<template>
	<div class="card">
		<div class="image">
			<slot name="image"></slot>
		</div>
		<div class="content">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Card',
};
</script>

<style lang="scss" scoped>
.card {
	height: 60vh;
	flex-basis: 27%;
	margin: 4rem 3%;
	@media only screen and(max-width: $bp-medium) {
		flex-basis: 44%;
	}
	@media only screen and(max-width: $bp-smallest) {
		flex-basis: 75%;
	}
	cursor: pointer;
	.image {
		height: 100%;
		img {
			border-radius: 3px;
			overflow: hidden;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: bottom;
		}
	}
	.content {
		border-radius: 3px;
		background-color: $bg-color-3;
		text-align: center;
		color: $font-headline;
		padding: 0.5rem 0;
		font-size: 2rem;
		font-weight: 500;
	}
}
</style>
