<template>
	<div class="card passenger-card">
		<h3>اطلاعات مسافران</h3>
		<Form
			@submit="onSubmit"
			:validation-schema="schema"
			class="passenger-card__form">
			<base-input
				v-for="formField in formFields"
				class="input-group--outline passenger-card__form-input"
				:v-model="formField.value"
				:name="formField.name"
				:label="formField.label"
				:rightIcon="formField.icon">
			</base-input>
			<base-search-input
				class="input-group--outline passenger-card__form-input"
				name="gender"
				label="جنسیت"
				icon="user">
			</base-search-input>
			<base-button
				class="passenger-card__btn button--filled button_1"
				type="submit">
				تایید
			</base-button>
		</Form>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { Form } from "vee-validate";
import BaseSearchInput from "@/components/base/BaseSearchInput.vue";

const emit = defineEmits(["OnSubmit"]);

const formFields = ref([
	{
		name: "firstName",
		value: "",
		label: "نام",
		icon: "user",
	},
	{
		name: "lastName",
		value: "",
		label: "نام خانوادگی",
		icon: "user",
	},
	{
		name: "phone",
		value: "",
		label: "شماره همراه",
		icon: "call",
	},
	{
		name: "ssnNumber",
		value: "",
		label: "کدملی",
		icon: "call",
	},
]);

const schema = {
	firstName: "required",
	lastName: "required",
	phone: "required|numeric|length:11",
	ssnNumber: "required|numeric|length:10",
};

function onSubmit(values) {
	console.log(values);
	emit("OnSubmit", values);
}
</script>

<style scoped>
.passenger-card {
	padding: 2rem;
	box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.2);
}
.passenger-card__form {
	display: flex;
	gap: 1rem;
}

.passenger-card__btn {
	margin: 0;
}

.passenger-card__form-input {
	width: 100%;
}
</style>
