<template>
	<div id="app">
		<Header />
		<div class="wrap">
			<transition name="fade" mode="out-in">
				<router-view />
			</transition>
		</div>
		<Footer />

		<Error />
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
@import '@/assets/sass/app.scss';

.wrap {
	min-height: 90vh;
}
</style>
