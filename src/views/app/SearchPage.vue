<template>
	<div class="search">
		<the-header></the-header>
		<main class="search__body">
			<template v-if="type === 'Plane'">
				<div v-if="planeDepartureList.length">
					<plane-card v-for="plane in planeDepartureList"></plane-card>
				</div>
				<div v-if="planeArrivalList.length">
					<plane-card v-for="plane in planeArrivalList"></plane-card>
				</div>
			</template>
			<template v-else-if="type === 'Train'">
				<div v-if="trainDepartureList.length">
					<train-card v-for="train in trainDepartureList"></train-card>
				</div>
				<div v-if="trainArrivalList.length">
					<train-card v-for="train in trainArrivalList"></train-card>
				</div>
			</template>
			<template v-else>
				<template v-if="hotelList.length">
					<hotel-card
						v-for="hotel in hotelList"
						:hotel="hotel"
						:searchData="searchData"></hotel-card>
				</template>
				<template v-else>
					<div>هتلی در شهر مقصد وجود ندارد:(</div>
				</template>
			</template>
		</main>
		<the-footer></the-footer>
	</div>
</template>

<script setup>
import TheHeader from "@/components/dashboard/TheHeader.vue";
import TheFooter from "@/components/dashboard/TheFooter.vue";
import { useRoute } from "vue-router";
import { usePlaneStore } from "@/stores/Plane";
import { useTrainStore } from "@/stores/Train";
import { useHotelStore } from "@/stores/Hotel";
import PlaneCard from "@/components/Plane/PlaneCard.vue";
import TrainCard from "@/components/Train/TrainCard.vue";
import HotelCard from "@/components/hotel/hotelCard.vue";

const route = useRoute();
const type = route.params.type;
const { planeDepartureList, planeArrivalList } = usePlaneStore();
const { trainDepartureList, trainArrivalList } = useTrainStore();
const { hotelList, searchData } = useHotelStore();
</script>

<style scoped>
.search {
	background-color: var(--color-bg-light-surface);
	width: 100%;
	height: 100vh;
}

.search__body {
	margin: 5rem auto;
	max-width: 80vw;
	display: flex;
	flex-direction: column;
	gap: 2rem;
}
</style>
