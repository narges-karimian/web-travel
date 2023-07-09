<template>
	<div class="menu">
		<nav class="menu__navbar">
			<div class="menu__logo">
				<img
					src="https://static.eurostar.com/ui/pictograms/logoEurostarFull.svg"
					alt="logo" />
			</div>
			<ul class="menu__list">
				<li v-for="item in menuItems">
					<menu-item
						:url="item.url"
						:title="item.title"
						:icon="item.icon">
						{{ item.title }}
					</menu-item>
				</li>
			</ul>
		</nav>
		<div>
			<menu-item
				:url="{ name: 'login' }"
				icon="profile">
				ورود یا ثبت نام
			</menu-item>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import menuItem from "@/components/dashboard/MenuItem.vue";

const menuItems = ref([
	{
		title: "بلیط هواپیما",
		url: { name: "plane" },
		icon: "plane",
	},
	{
		title: "بلیط قطار",
		url: { name: "train" },
		icon: "train",
	},
	{
		title: "هتل",
		url: { name: "hotel" },
		icon: "hotel",
	},
]);
</script>

<style scoped>
.menu {
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	top: 0;
	right: 0;
	left: 0;
	padding: 1rem 8rem;
	background-color: var(--color-primary-900);
	z-index: 10;
}

.menu__navbar {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 4em;
}

.menu__list {
	display: flex;
	align-items: center;
	gap: 4.8rem;
	list-style: none;
}

.menu__logo {
	width: 15rem;
}
</style>
