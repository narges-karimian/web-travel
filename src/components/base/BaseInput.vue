<template>
	<div
		:class="[
			'input-group',
			`input-group--${theme}`,
			{ 'input-group--desable': isDesabled },
		]">
		<div
			:class="['input-group__field', { 'input-group--error': errorMessage }]">
			<Field
				:name="name"
				:id="name"
				:type="type"
				class="font-subtitle_1 input-group__input"
				:list="listId"
				autocomplete="off"
				@input="onInput"
				:readonly="readonly">
			</Field>

			<label
				:class="['input-group__label', { 'input-group__label--up': labelUp }]"
				:for="name">
				{{ label }}
			</label>

			<icon-right class="icon icon--right"> </icon-right>
			<icon-left
				v-if="leftIcon"
				class="icon icon--left"
				@click="onClickLeftIcon">
			</icon-left>
		</div>
		<div
			class="input-group__error"
			v-show="errorMessage">
			<error-icon class="input-group__error-icon"></error-icon>
			<p class="input-group__error-message font-caption">{{ errorMessage }}</p>
		</div>
	</div>
</template>

<script setup>
import { computed, toRef, defineAsyncComponent } from "vue";
import { Field, useField } from "vee-validate";
import ErrorIcon from "@/assets/icons/inputIcons/info-circle.svg";

const emit = defineEmits(["update:modelValue", "LeftIconClick"]);

const props = defineProps({
	type: {
		type: String,
		default: "text",
	},
	modelValue: {
		type: String,
	},
	name: {
		type: String,
		required: true,
	},
	label: {
		type: String,
		required: true,
	},
	rightIcon: {
		type: String,
		default: null,
	},
	leftIcon: {
		type: String,
		default: null,
	},
	listId: {
		type: String,
	},
	theme: {
		type: String,
		default: "outline",
	},
	isDesabled: {
		type: Boolean,
		default: false,
	},
	readonly: {
		type: Boolean,
		default: false,
	},
});

const name = toRef(props, "name");
const { errorMessage, meta } = useField(name, undefined, {
	initialValue: props.modelValue,
	label: props.label,
});

const iconRight = defineAsyncComponent(() =>
	import(`../../assets/icons/inputIcons/${props.rightIcon}.svg`)
);

const iconLeft = defineAsyncComponent(() =>
	import(`../../assets/icons/inputIcons/${props.leftIcon}.svg`)
);

const labelUp = computed(
	() => meta.dirty || !!meta.initialValue || !errorMessage
);

function onInput(event) {
	emit("update:modelValue", event.target.value);
}

function onClickLeftIcon() {
	emit("LeftIconClick");
}
</script>

<style scoped>
.input-group {
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
	width: 100%;
}

.input-group__field {
	border-radius: 16px;
	position: relative;
	display: flex;
}

.input-group__label {
	position: absolute;
	top: calc((100% - 2.4rem) / 2);
	right: 45px;
	font-style: normal;
	font-weight: 600;
	font-size: 1.6rem;
	line-height: 2.8rem;
	transition: top 0.2s ease-in;
}

.input-group__label--up {
	font-style: normal;
	font-weight: 400;
	font-size: 1.2rem;
	line-height: 1.6rem;
	top: 0.4rem;
}

.icon {
	position: absolute;
	top: calc((100% - 2.4rem) / 2);
	fill: var(--color-primary-500);
}

.icon--right {
	right: 10px;
	pointer-events: none;
}

.icon--left {
	left: 10px;
}

.input-group__input {
	padding: 1rem;
	border-radius: 16px;
	padding: 1rem 4.5rem;
	width: 100%;
	outline: none;
	display: flex;
	align-self: flex-end;
	border: 1px solid var(--color-gray-300);
	font-family: "yekanBakh";
	height: 4.8rem;
}

.input-group__input:hover {
	border-inline: 2px solid var(--color-gray-300);
}

.input-group__input:focus ~ .input-group__label {
	font-style: normal;
	font-weight: 400;
	font-size: 1.2rem;
	line-height: 1.6prem;
	top: 4px;
}

.input-group__input:valid {
	padding-top: 1.5rem;
}

.input-group--desable .input-group__input {
	border: 1px solid var(--color-gray-200);
}

.input-group--desable .input-group__input ~ .input-group__label {
	color: var(--color-gray-200);
}

.input-group--desable .icon {
	fill: var(--color-gray-200);
}

.input-group__error {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 0.4rem;
	color: var(--color-error-900);
}

.input-group--error .input-group__input {
	border: 2px solid var(--color-error-900);
	padding-top: 1.5rem;
}

.input-group--filled .input-group__input {
	padding: 1rem 4.5rem 1rem 0.2rem;
	border: none;
	background-color: var(--color-primary-100);
}

.input-group--filled .input-group__input:hover {
	border-inline: none;
}

.input-group--filled .input-group__input:valid {
	padding-top: 1.5rem;
}

.input-group--filled .input-group__input::-webkit-calendar-picker-indicator {
	opacity: 0;
}
</style>
