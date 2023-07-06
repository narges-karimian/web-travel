<template>
	<Form
		class="hotel__search"
		@submit="onSubmit"
		:validation-schema="schema">
		<base-search-input
			class="hotel__search-input"
			:inputList="citiesList"
			name="city"
			label="مقصد"
			icon="location">
		</base-search-input>
		<base-input
			class="hotel__search-input palne__search-start"
			:modelValue="toPersianDigits(startTime)"
			name="startTime"
			label="تاریخ ورود"
			rightIcon="calendar">
		</base-input>
		<base-input
			class="hotel__search-input palne__search-end"
			:modelValue="toPersianDigits(endTime)"
			name="endTime"
			label="تاریخ خروج"
			rightIcon="calendar">
		</base-input>
		<!-- <base-select-people
			name="passengers"
			label="مسافران"
			icon="user">
		</base-select-people> -->
		<base-input
			class="hotel__search-input"
			type="number"
			name="passengers"
			label="مسافران"
			rightIcon="user">
		</base-input>
		<base-button
			class="button--filled subtitle_1 hotel__search-button"
			type="submit">
			جستجو
		</base-button>
		<date-picker
			convertNumbers
			v-model.trim="startTime"
			custom-input=".palne__search-start">
		</date-picker>

		<date-picker
			convertNumbers
			v-model.trim="endTime"
			custom-input=".palne__search-end"
			@click="onEndTimeClick">
		</date-picker>
	</Form>
</template>

<script setup>
import { Form } from "vee-validate";
import BaseSearchInput from "@/components/base/BaseSearchInput.vue";
import { useCityStore } from "@/stores/Cities";
import DatePicker from "vue3-persian-datetime-picker";
import { ref } from "vue";
import { toPersianDigits } from "@/utils/functions/persianDigits";
import { useHotelStore } from "@/stores/Hotel";
import { useRouter } from "vue-router";

const router = useRouter();
const startTime = ref("");
const endTime = ref("");
const isDesableEndTime = ref(true);
const citiesList = useCityStore().getAllCities;
const schema = {
	city: "required",
	startTime: "required",
	endTime: "required",
	passengers: "required",
};
const store = useHotelStore();

function onEndTimeClick() {
	isDesableEndTime.value = false;
}

function onSubmit(values) {
	try {
		store.search(values);
	} catch (error) {
		console.log(error);
	} finally {
		router.push({ name: "searchPage", params: { type: "hotel" } });
	}
}
</script>

<style scoped>
.hotel__search {
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 0.5rem;
	border: 1px solid var(--color-gray-200);
	padding: 4rem 2rem;
	border-radius: 10px;
}

.hotel__search-input {
	width: 100%;
}

.hotel__search-button {
	margin: 0;
}
</style>
