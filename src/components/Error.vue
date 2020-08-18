<template>
	<div class="wrapper" v-if="isError">
		<div class="error">
			<img src="../assets/img/x.svg" alt="X icon" @click="setError" />
			<span>
				{{ getError }}
			</span>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	name: 'Error',

	computed: {
		...mapGetters(['getError', 'isError']),
	},
	methods: {
		...mapActions(['setError']),
	},
};
</script>

<style lang="scss" scoped>
.wrapper {
	top: 0;
	left: 0;
	position: fixed;
	display: block;
	height: 100vh;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 1;
}
.error {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 75%;
	max-width: 40rem;
	height: 20rem;
	z-index: 20;
	background-color: $bg-color-2;
	border-radius: 3px;
	padding: 1rem;
	color: $font-headline;
	font-size: 2.5rem;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		position: absolute;
		right: 1.5rem;
		top: 1.5rem;
		width: 2.5rem;
		height: 2.5rem;
		cursor: pointer;
	}
}
</style>
