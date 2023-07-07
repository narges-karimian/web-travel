<template>
	<div class="card train">
		<div class="train__body">
			<div class="train__general-information">
				<div class="train__logo">
					<img
						class="train__img"
						:src="train.Company?.logo"
						:alt="train.Company?.name"
						:title="train.Company?.name" />
				</div>
				<div class="train__information">
					<div class="train__type caption">
						<span class="pill">{{ train.train?.trainType }} </span>
						<span class="pill">{{ train.Company?.name }}</span>
					</div>
					<div class="train__path subtitle_2">
						<div class="train__point-way">
							<span class="train__path-time">{{ train.DepartureTime }} </span>
							<span class="train__parh-name">{{ train.Departure }} </span>
						</div>
						<div class="train__way"></div>
						<div class="train__point-way">
							<span class="train__path-time">{{ train.ArrivalTime }}</span>
							<span class="train__path-name">{{ train.Arrival }}</span>
						</div>
					</div>
					<div
						class="train__show-details button_1"
						@click="toggleDetails">
						اطلاعات بیشتر
					</div>
				</div>
			</div>
			<div v-show="isDetailOpen" :class="['train__details', 'body_1', { active: isDetailOpen }]">
				<div class="train__detail-item">
					<div class="train__detail-title subtitle_2">نوع کوپه</div>
					<div class="train__detail-body">
						{{ train.train?.WagonCapacity }} تخته
					</div>
				</div>
				<div class="train__detail-item">
					<div class="train__detail-title subtitle_2">ظرفیت</div>
					<div class="train__detail-body">{{ train.Capacity }} نفر</div>
				</div>
				<div
					v-if="train.CoupeFacilities?.length"
					class="train__detail-item">
					<div class="train__detail-title subtitle_2">امکانات کوپه</div>
					<div
						v-for="facility in train.CoupeFacilities"
						class="train__detail-body">
						{{ facility }}
					</div>
				</div>
				<div
					v-if="train.GeneralFacilities?.length"
					class="train__detail-item">
					<div class="train__detail-title subtitle_2">امکانات عمومی قطار</div>
					<div
						v-for="facility in train.GeneralFacilities"
						class="train__detail-body">
						{{ facility }}
					</div>
				</div>
			</div>
		</div>
		<div class="train__reserve caption">
			<div class="train__capacity">{{ train.Capacity }} نفر ظرفیت</div>
			<div class="train__price body_1">{{ trainPrice }} تومان</div>
			<base-button class="train__reserve-button button--filled">
				انتخاب بلیط
			</base-button>
		</div>
	</div>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
	train: {
		type: Object,
		required: true,
	},
	searchData: {
		type: Object,
		required: true,
	},
});

const isDetailOpen = ref(false);

const trainPrice = computed(() => {
	let price = 0;
	price = props.searchData.users[0] * props.train.AdtPrice;
	price += props.searchData.users[1] ? props.train.ChdPrice : 0;
	price += props.searchData.users[2] ? props.train.InfPrice : 0;
	return price;
});

function toggleDetails() {
	isDetailOpen.value = !isDetailOpen.value;
}
</script>

<style scoped>
.train {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

.train__reserve {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 3rem;
	border-right: 1px solid lightgray;
}

.train__capacity {
	background-color: burlywood;
	padding: 0.5rem 1rem;
	border-radius: 24px;
}

.train__type {
	display: flex;
	gap: 2rem;
}

.train__general-information {
	padding: 3rem;
	display: flex;
	gap: 2rem;
	align-items: center;
}

.train__path {
	display: flex;
	align-items: center;
	gap: 2rem;
}

.train__point-way {
	display: flex;
	flex-direction: column;
}

.train__way {
	min-width: 150px;
	height: 2px;
	border: 1px solid var(--color-gray-300);
}

.train__logo {
	width: 100px;
	height: 100px;
}

.train__img {
	border: 1px solid lightgray;
	border-radius: 50%;
	width: 100px;
	height: 100px;
}

.train__show-details {
	color: var(--color-primary-900);
	cursor: pointer;
}

.train__details {
	height: 0;
	opacity: 0;
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
	transition: all 0.5s ease;
}

.train__details.active {
	height: fit-content;
	opacity: 1;
	padding: 3rem;
}

.pill {
	background-color: lightgray;
	padding: 0.5rem 1rem;
	border-radius: 24px;
}
</style>
