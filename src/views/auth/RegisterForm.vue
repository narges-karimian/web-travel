<template>
	<router-link :to="{ name: 'login' }">
		<arrow-right class="back-link"></arrow-right>
	</router-link>
	<Form
		@submit="onSubmit"
		:validation-schema="schema"
		class="form-container">
		<h3 class="">ثبت نام</h3>
		<base-input
			v-for="formField in formFields"
			class="input-group--outline"
			:type="formField.type"
			:value="formField.value"
			:name="formField.name"
			:label="formField.label"
			:placeholder="formField.placeholder"
			:rightIcon="formField.icon[0].name">
		</base-input>
		<base-button
			:isLoading="isRegisterd"
			class="button--filled button_1"
			type="submit"
			>ثبت نام</base-button
		>
	</Form>
</template>

<script setup>
import { ref } from "vue";
import { Form } from "vee-validate";
import { useUserAuthStore } from "@/stores/Authentication";
import { useRouter } from "vue-router";
import ArrowRight from "@/assets/icons/sidebar icons/arrow-right.svg";
import { toast } from "vue3-toastify";

const router = useRouter();
const formFields = ref([
	{
		type: "email",
		name: "email",
		value: "",
		label: "ایمیل",
		icon: [
			{
				position: "icon--right",
				name: "user",
			},
		],
		placeholder: "ایمیل",
	},
	{
		type: "phone",
		name: "phone",
		value: "",
		label: "شماره همراه",
		icon: [
			{
				position: "icon--right",
				name: "call",
			},
		],
		placeholder: "شماره همراه",
	},
	{
		type: "password",
		name: "password",
		value: "",
		label: "رمز عبور",
		icon: [
			{
				position: "icon--right",
				name: "lock",
			},
			{
				position: "icon--left",
				name: "eye",
				show: false,
			},
		],
		placeholder: "رمز عبور",
	},
	{
		type: "confirmPassword",
		name: "confirmPassword",
		value: "",
		label: "تایید رمز عبور",
		icon: [
			{
				position: "icon--right",
				name: "lock",
			},
			{
				position: "icon--left",
				name: "eye",
				show: false,
			},
		],
		placeholder: "تایید رمز عبور",
	},
]);

const schema = {
	phone: "required|numeric|length:11",
	email: "required|email",
	password: "required|password|min:8",
	confirmPassword: "required|confirmed:@password",
};

const isRegisterd = ref(false);

async function onSubmit(values) {
	const store = useUserAuthStore();
	isRegisterd.value = true;
	try {
		await store.register(values);
		toast.success("ثبت نام با موفقیت انجام شد.");
	} catch (error) {
		console.log(error);
	}

	isRegisterd.value = false;
}
</script>

<style scoped>
.form-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.4rem;
	padding: 0 7.5rem;
	margin-bottom: 4rem;
}

.back-link {
	position: absolute;
	top: 40px;
	right: 40px;
	width: 2.4rem;
	height: 2.4rem;
	fill: #292d32;
}
</style>
