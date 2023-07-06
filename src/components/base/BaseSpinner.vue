<template>
	<div
		class="spinner"
		:style="{ width: '40px', height: `40px` }">
		<div
			:style="[spinnerStyle, animDiv1]"
			class="spinner__item"></div>
		<div
			:style="[spinnerStyle, animDiv2]"
			class="spinner__item"></div>
		<div
			:style="[spinnerStyle, animDiv3]"
			class="spinner__item"></div>
		<div :style="[spinnerStyle]"></div>
	</div>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
	color: {
		type: String,
		default: "#7f58af",
	},
});

function calcPropertyValue(propName, originalValue, modificator) {
	const computedStyle = {};
	const timeQuantityOuter = originalValue.match(/^\d*\.?\d+/)[0];
	const timeUnit = originalValue.match(/s|(ms)$/)[0];
	const timeQuantityInner =
		Math.round(timeQuantityOuter * 1000 * modificator) / 1000;

	computedStyle[propName] = timeQuantityInner + timeUnit;
	return computedStyle;
}

const spinnerStyle = ref({
	borderWidth: "4px",
	borderColor: `${props.color} transparent transparent transparent`,
	animationDuration: "1.2s",
});

const animDiv1 = computed(() => {
	return calcPropertyValue("animationDelay", "1.2s", -0.375);
});

const animDiv2 = computed(() => {
	return calcPropertyValue("animationDelay", "1.2s", -0.25);
});

const animDiv3 = computed(() => {
	return calcPropertyValue("animationDelay", "1.2s", -0.125);
});
</script>

<style scoped>
.spinner {
	display: inline-block;
	position: relative;
}

.spinner__item {
	box-sizing: border-box;
	display: block;
	position: absolute;
	width: 80%;
	height: 80%;
	margin: 10%;
	border: 8px solid #fff;
	border-radius: 50%;
	border-color: #fff transparent transparent transparent;
	animation-name: ring;
	animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
	animation-iteration-count: infinite;
}

@keyframes ring {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}
</style>
