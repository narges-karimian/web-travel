<template>
	<div class="card plane">
		<div class="plane__body">
			<div class="plane__general-information">
				<div class="plane__logo">
					<img
						class="plane__img"
						:src="plane.Airline?.Logo"
						:alt="plane.Airline?.Name"
						:title="plane.Airline?.Name" />
				</div>
				<div class="plane__information">
					<div class="plane__type caption">
						<span class="pill">{{ plane.Airline?.Name }} </span>
					</div>
					<div class="plane__path subtitle_2">
						<div class="plane__point-way">
							<span class="plane__path-time">{{ plane.DepartureTime }} </span>
							<span class="plane__parh-name">{{ plane.Departure }} </span>
						</div>
						<div class="plane__way"></div>
						<div class="plane__point-way">
							<span class="plane__path-time">{{ plane.ArrivalTime }}</span>
							<span class="plane__path-name">{{ plane.Arrival }}</span>
						</div>
					</div>
					<div
						class="plane__show-details button_1"
						@click="toggleDetails">
						اطلاعات بیشتر
					</div>
				</div>
			</div>
			<div
				v-show="isDetailOpen"
				:class="['plane__details', 'body_1', { active: isDetailOpen }]">
				<div class="plane__detail-item">
					<div class="plane__detail-title subtitle_2">مقدار بار مجاز</div>
					<div class="plane__detail-body">20 کیلوگرم</div>
				</div>
				<div class="plane__detail-item">
					<div class="plane__detail-title subtitle_2">ظرفیت</div>
					<div class="plane__detail-body">{{ plane.Capacity }} نفر</div>
				</div>
			</div>
		</div>
		<div class="plane__reserve caption">
			<div class="plane__capacity">{{ plane.Capacity }} نفر ظرفیت</div>
			<div class="plane__price body_1">{{ planePrice }} تومان</div>
			<base-button
				class="plane__reserve-button button--filled"
				@click="reservePlane">
				انتخاب پرواز
			</base-button>
		</div>
	</div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { toEnglishDigits } from "@/utils/functions/englishDigits";

const props = defineProps({
	plane: {
		type: Object,
		required: true,
	},
	searchData: {
		type: Object,
		required: true,
	},
});

const isDetailOpen = ref(false);
const router = useRouter();

const planePrice = computed(() => {
	let price = 0;
	price = props.searchData.users[0] * props.plane.AdtPrice;
	price += props.searchData.users[1] ? props.plane.ChdPrice : 0;
	price += props.searchData.users[2] ? props.plane.InfPrice : 0;
	return price;
});

function toggleDetails() {
	isDetailOpen.value = !isDetailOpen.value;
}

function reservePlane() {
	router.push({
		name: "singlePage",
		params: { type: "Plane" },
		query: {
			id: props.plane.ID,
			adult: props.searchData.users[0],
			children: props.searchData.users[1],
			inf: props.searchData.users[2],
			startTime: toEnglishDigits(props.searchData.startTime),
			endTime: toEnglishDigits(props.searchData.endTime),
		},
	});
}
</script>

<style scoped>
.plane {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

.plane__reserve {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 3rem;
	border-right: 1px solid lightgray;
}

.plane__capacity {
	background-color: burlywood;
	padding: 0.5rem 1rem;
	border-radius: 24px;
}

.plane__type {
	display: flex;
	gap: 2rem;
}

.plane__general-information {
	padding: 3rem;
	display: flex;
	gap: 2rem;
	align-items: center;
}

.plane__path {
	display: flex;
	align-items: center;
	gap: 2rem;
}

.plane__point-way {
	display: flex;
	flex-direction: column;
}

.plane__way {
	min-width: 150px;
	height: 2px;
	border: 1px solid var(--color-gray-300);
}

.plane__logo {
	width: 100px;
	height: 100px;
}

.plane__img {
	border: 1px solid lightgray;
	border-radius: 50%;
	width: 100px;
	height: 100px;
}

.plane__show-details {
	color: var(--color-primary-900);
	cursor: pointer;
}

.plane__details {
	height: 0;
	opacity: 0;
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
	transition: all 0.5s ease;
}

.plane__details.active {
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
