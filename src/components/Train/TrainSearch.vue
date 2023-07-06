<template>
	<Form
		class="train__search"
		@submit="onSubmit"
		:validation-schema="schema">
		<base-search-input
			class="train__search-input"
			:inputList="citiesList"
			name="from"
			label="مبدا"
			icon="location">
		</base-search-input>
		<base-search-input
			class="train__search-input"
			:inputList="citiesList"
			name="to"
			label="مقصد"
			icon="location">
		</base-search-input>
		<base-input
			class="train__search-input palne__search-start"
			:modelValue="toPersianDigits(startTime)"
			name="startTime"
			label="تاریخ رفت"
			rightIcon="calendar">
		</base-input>
		<base-input
			class="train__search-input palne__search-end"
			:modelValue="toPersianDigits(endTime)"
			name="endTime"
			label="تاریخ برگشت"
			rightIcon="calendar"
			:isDesabled="isDesableEndTime">
		</base-input>
		<base-select-people
			name="passengers"
			label="مسافران"
			icon="user">
		</base-select-people>
		<base-button
			class="button--filled subtitle_1 train__search-button"
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
import { toPersianDigits } from "@/utils/functions/persianDigits";
import BaseSelectPeople from "@/components/base/BaseSelectPeople.vue";
import DatePicker from "vue3-persian-datetime-picker";
import { useCityStore } from "@/stores/Cities";
import { ref } from "vue";
import { useRouter } from 'vue-router';
import { useTrainStore } from "@/stores/Train";

const router = useRouter();
const startTime = ref("");
const endTime = ref("");
const isDesableEndTime = ref(true);
const citiesList = useCityStore().getTrainCities;
const store = useTrainStore();
const schema = {
	from: "required",
	to: "required",
	startTime: "required",
	passengers: "required",
};

function onEndTimeClick() {
	isDesableEndTime.value = false;
}

function onSubmit(values) {
	const users = []
    const userList = values.passengers.split(",")
    for (let i = 0; i< userList.length ; i++) {
        users.push(parseInt(userList[i].split(' ')[0]))
    }
    const data = { users, ...values }
	try {
		store.searchDeparture(data);
		if(values.endTime) {
			store.searchArrival(data);
		}
	} catch (error) {
		console.log(error);
	} finally {
        router.push({"name":"searchPage","params":{type: "Train"}});
    }
}
</script>

<style scoped>
.train__search {
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 0.5rem;
	border: 1px solid var(--color-gray-200);
	padding : 4rem 2rem;
	border-radius: 10px;
}

.train__search-input {
	width: 100%;
}

.train__search-button {
	margin: 0;
}
</style>
