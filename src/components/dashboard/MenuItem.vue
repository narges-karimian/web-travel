<template>
	<router-link
		:to="url"
		class="menu-item">
		<menu-icon class="menu-item__icon"></menu-icon>
		<h6 class="menu-item__title"><slot></slot></h6>
	</router-link>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
const MenuIcon = defineAsyncComponent(() =>
	import(`../../assets/icons/menu icons/${props.icon}.svg`)
);

const props = defineProps({
	url: {
		type: Object,
	},
	icon: {
		type: String,
	},
});
</script>

<style scoped>
.menu-item {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	color: var(--color-bg-light-surface);
}
.menu-item__icon {
	fill: var(--color-bg-light-surface);
	width: 5rem;
	height: 5rem;
}

.router-link-active .menu-item__icon,
.router-link-active .menu-item__title {
	fill: var(--color-secondary-300);
	color: var(--color-secondary-300);
}
</style>
