<template>
	<div id="app">
		<Header />
		<transition name="fade" mode="out-in">
			<router-view />
		</transition>
		<transition name="fade" mode="out-in">
			<Error />
		</transition>
	</div>
</template>
<script>
import Header from '@/components/Header.vue';
import Error from '@/components/Error.vue';
export default {
	name: 'App',
	components: {
		Header,
		Error,
	},
};
</script>

<style lang="scss">
@import 'assets/sass/base';
.fade-enter-active,
.fade-leave-active {
	transition-duration: 0.2s;
	transition-property: opacity;
	transition-timing-function: ease;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
