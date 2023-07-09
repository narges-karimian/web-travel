<template>
	<empty-layout>
		<main class="search__body">
			<div
				v-if="type === 'Plane'"
				class="search__two-way">
				<div
					v-if="planeDepartureList.length"
					class="search__item-container">
					<plane-card
						v-for="plane in planeDepartureList"
						:plane="plane"
						:searchData="searchPlaneData">
					</plane-card>
				</div>
				<div
					v-if="planeArrivalList.length"
					class="search__item-container">
					<plane-card
						v-for="plane in planeArrivalList"
						:plane="plane"
						:searchData="searchPlaneData">
					</plane-card>
				</div>
			</div>
			<div
				v-else-if="type === 'Train'"
				class="search__two-way">
				<div
					v-if="trainDepartureList.length"
					class="search__item-container">
					<train-card
						v-for="train in trainDepartureList"
						:train="train"
						:searchData="searchTrainData">
					</train-card>
				</div>
				<div
					v-if="trainArrivalList.length"
					class="search__item-container">
					<train-card
						v-for="train in trainArrivalList"
						:train="train"
						:searchData="searchTrainData">
					</train-card>
				</div>
			</div>
			<template v-else>
				<template v-if="hotelList.length">
					<hotel-card
						v-for="hotel in hotelList"
						:hotel="hotel"
						:searchData="searchData">
					</hotel-card>
				</template>
				<template v-else>
					<div>هتلی در شهر مقصد وجود ندارد:(</div>
				</template>
			</template>
		</main>
	</empty-layout>
</template>

<script setup>
import { useRoute } from "vue-router";
import { usePlaneStore } from "@/stores/Plane";
import { useTrainStore } from "@/stores/Train";
import { useHotelStore } from "@/stores/Hotel";
import PlaneCard from "@/components/Plane/PlaneCard.vue";
import TrainCard from "@/components/Train/TrainCard.vue";
import HotelCard from "@/components/hotel/hotelCard.vue";
import EmptyLayout from "@/layout/EmptyLayout.vue";

const route = useRoute();
const type = route.params.type;
const { planeDepartureList, planeArrivalList, searchPlaneData } =
	usePlaneStore();
const { trainDepartureList, trainArrivalList, searchTrainData } =
	useTrainStore();
const { hotelList, searchData } = useHotelStore();
</script>

<style scoped>

.search__body {
	margin: 5rem auto;
	max-width: 80vw;
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.search__two-way {
	display: flex;
	align-items: flex-start;
	gap: 0.5rem;
}

.search__item-container {
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 1rem;
}
</style>
