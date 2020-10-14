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
	name: 'MovieCard',
};
</script>

<style lang="scss" scoped>
.card {
	padding: 0 2.5rem;
	flex-basis: 50%;

	margin: 4rem 0;
	cursor: pointer;
	@media only screen and(max-width: $v-7) {
		flex-basis: 100%;
	}

	.image {
		img {
			border-radius: 3px;
			overflow: hidden;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.content {
		border-radius: 3px;
		background-color: $bg-color-3;
		text-align: center;
		color: $font-headline;
		padding: 0.75rem 0;
		font-size: 2.2rem;
		font-weight: 500;
	}
}
</style>
