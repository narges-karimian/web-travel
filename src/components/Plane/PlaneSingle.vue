<template>
	<div class="hotel-page">
		<div class="hotel-page__card">
			<h3></h3>
		</div>
	</div>
</template>

<script setup>
import { usePlaneStore } from "@/stores/Plane";

const props = defineProps({
	id: {
		type: [String, Number],
		required: true,
	},
	startTime: {
		type: String,
		required: true,
	},
	endTime: {
		type: String,
		required: true,
	},
    adult: {
		type: [String, Number],
    },
    children: {
		type: [String, Number],
    },
    inf: {
		type: [String, Number],
    }
});

const plane = usePlaneStore().getDeparturePlaneById();
</script>
