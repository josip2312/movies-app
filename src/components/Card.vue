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
	flex-basis: 27%;
	max-width: 30rem;
	margin: 4rem 3%;
	cursor: pointer;
	@media only screen and(max-width: $bp-smaller) {
		flex-basis: 80%;
		max-width: 35rem;
	}
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
