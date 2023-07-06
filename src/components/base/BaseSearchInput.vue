//TODO bug fix
<template>
	<div class="search-input">
		<div class="search-input__wrapper">
			<base-input
				v-model.trim="inputValue"
				class="input-group--outline search-input__input"
				:modelValue="inputValue"
				:name="name"
				:label="label"
				:rightIcon="icon"
				@click="showList">
			</base-input>
			<ul
				class="search-input__data-list"
				v-if="show">
				<li
					v-for="item in dataList"
					class="search-input__data-list-item body_1"
					@click="setValue(item)">
					{{ item }}
				</li>
				<p
					v-if="!dataList.length"
					class="body_1">
					موردی یافت نشد!
				</p>
			</ul>
		</div>
		<div
			v-if="show"
			class="search-input__overlay"
			@click="closeList"></div>
	</div>
</template>

<script setup>
import { computed, ref } from "vue";
import { clickOutSide  as vClickOutSide  } from "@mahdikhashan/vue3-click-outside"

const props = defineProps({
	inputList: {
		type: Array,
		default: [],
	},
	name: {
		type: String,
	},
	label: {
		type: String,
	},
	icon: {
		type: String,
	},
});

const inputValue = ref("");
const show = ref(false);

const dataList = computed(() => {
	return props.inputList.filter((item) => item.includes(inputValue.value));
});

function setValue(value) {
	inputValue.value = value;
	show.value = false;
}

function showList() {
	show.value = !show.value;
	if (!show.value) {
		inputValue.value = "";
	}
}

function closeList() {
	show.value = false;
	if (!show.value) {
		inputValue.value = "";
	}
}
</script>

<style scoped>
.search-input__wrapper {
	position: relative;
}

.search-input__input {
	z-index: 1;
	font-family: "yekanBakh";
}

.search-input__data-list {
	z-index: 1;
	position: absolute;
	list-style: none;
	padding: 1rem 2rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 100%;
	box-shadow: 0px 0px 4px rgba(0, 67, 101, 0.05);
	background-color: #ffffff;
	height: 20rem;
	overflow-y: auto;
}

.search-input__data-list-item {
	border-bottom: 1px solid var(--color-gray-200);
	width: 100%;
}
.search-input__overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: transparent;
	z-index: 0;
}
</style>
