<template>
	<div class="main">
		<the-header></the-header>
		<main class="main__body">
			<div class="main__background"></div>
			<div class="main__view">
				<router-view></router-view>
			</div>
		</main>
		<the-footer></the-footer>
	</div>
</template>

<script setup>
import TheHeader from "@/components/dashboard/TheHeader.vue";
import TheFooter from "@/components/dashboard/TheFooter.vue";
</script>

<style scoped>
.main {
	background-color: var(--color-bg-light-surface);
	width: 100%;
	height: 100vh;
}

.main__background {
	width: 100%;
	height: 50rem;
	background-image: url("../assets/img/about-us.jpg");
	background-repeat: no-repeat;
	background-size: contain;
    background-position: top;
}

.main__view {
	background-color: var(--color-bg-light-surface);
	margin: -10rem 10rem 0 10rem;
	border-radius: 10px;
}
</style>
