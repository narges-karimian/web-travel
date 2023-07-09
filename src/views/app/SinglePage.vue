<template>
	<empty-layout>
		<template v-if="type === 'Plane'">
			<plane-single :id="id"></plane-single>
		</template>
		<template v-else-if="type === 'Train'">
			<train-single :id="id"></train-single>
		</template>
		<template v-else>
			<hotel-single
				:id="id"
				:attendance="attendance"
				:passengers="passengers"></hotel-single>
		</template>
	</empty-layout>
</template>

<script setup>
import EmptyLayout from "@/layout/EmptyLayout.vue";
import { useRoute } from "vue-router";
import HotelSingle from "@/components/hotel/hotelSingle.vue";
import PlaneSingle from "@/components/Plane/PlaneSingle.vue";
import TrainSingle from "@/components/Train/TrainSingle.vue";

const route = useRoute();
const type = route.params.type;
const id = route.query.id;
const passengers = route.query.passengers;
const attendance = route.query.attendance;
const adult = route.query.adult;
const children = route.query.children;
const inf = route.query.inf;

</script>
