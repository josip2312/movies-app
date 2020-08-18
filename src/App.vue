<template>
	<div id="app">
		<Header />
		<transition name="fade" mode="out-in">
			<router-view />
		</transition>
		<transition name="fade" mode="out-in">
			<Error />
		</transition>
		<Footer />
		<Loader v-if="isLoading" />
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
import Loader from '@/components/Loader.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Error from '@/components/Error.vue';
export default {
	name: 'App',
	computed: {
		...mapGetters(['isLoading']),
	},
	components: {
		Header,
		Error,
		Footer,
		Loader,
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
