<template>
	<button
		:disabled="isDisabled || isLoading"
		:type="type"
		:class="[
			'button',
			{
				'button--disabled': isDisabled,
				'button--loading': isLoading,
			},
		]">
		<button-icon
			v-if="icon"
			class="button__icon">
		</button-icon>
		<base-spinner
			v-if="isLoading"
			color="#ffffff">
		</base-spinner>
		<slot v-else></slot>
	</button>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
const ButtonIcon = defineAsyncComponent(() =>
	import(`../../assets/icons/buttonIcons/${props.icon}.svg`)
);

const props = defineProps({
	icon: {
		type: String,
		default: "",
	},
	type: {
		type: String,
		default: "button",
	},
	isLoading: {
		type: Boolean,
		default: false,
	},
	isDisabled: {
		type: Boolean,
		default: false,
	},
});
</script>

<style scoped>
.button {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.8rem;
	padding: 1rem 1.6rem;
	width: 100%;
	font-family: "yekanBakh";
	margin: 1rem 0;
	transition: all 0.3s ease-in;
	cursor: pointer;
}

.button__icon {
	fill: var(--color-bg-light-surface);
}

.button--filled {
	background: var(--color-primary-600);
	border-radius: 20px;
	border: none;
	color: var(--color-primary-100);
}

.button--filled:hover {
	background: var(--color-primary-800);
}
.button--filled.button--disabled {
	background: var(--color-primary-300);
}

.button--outline {
	background: var(--color-bg-light-default);
	border-radius: 20px;
	border: 2px solid var(--color-primary-600);
	color: var(--color-primary-600);
}

.button--outline:hover {
	background: var(--color-primary-100);
}

.button--outline.button--disabled {
	border: 2px solid var(--color-primary-300);
}

.button--error {
	background: var(--color-error-main);
}

.button--error:hover {
	background: var(--color-error-900);
}

.button--error.button--disabled {
	background: var(--color-error-300);
}
</style>
