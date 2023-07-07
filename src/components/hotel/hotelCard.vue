<template>
	<div class="card hotel">
		<div class="hotel__body">
			<div class="hotel__image">
				<img
					class="hotel__image-img"
					:src="hotel.ThumbNailUrl"
					:alt="hotel.Name" />
			</div>
			<div class="hotel__description caption">
				<h6 class="hotel__title">{{ hotel.Name }}</h6>
				<div class="hotel__star">
					<star-icon class="hotel__star-icon"></star-icon>
					<span>{{ hotel.StarRating }}</span>
				</div>
				<div class="hotel__address">
					<location-icon class="hotel__address-icon"></location-icon>
					<span>{{ hotel.Address }}</span>
				</div>
			</div>
		</div>
		<div class="hotel__reserve body_2">
			<div class="hotel__detail">{{ attendanceTime }} {{ passengers }}</div>
			<base-button class="hotel__reserve-button button--filled">
				مشاهده اتاق ها و رزرو
			</base-button>
		</div>
	</div>
</template>

<script setup>
import StarIcon from "@/assets/icons/cardIcons/star.svg";
import LocationIcon from "@/assets/icons/cardIcons/location.svg";
import { computed, ref } from "vue";
import moment from "jalali-moment";
import { toEnglishDigits } from "@/utils/functions/englishDigits";

const props = defineProps({
	hotel: {
		type: Object,
		required: true,
	},
	searchData: {
		type: Object,
		required: true,
	},
});

const attendanceTime = computed(() => {
	const startTime = moment(
		toEnglishDigits(props.searchData.startTime),
		"jYYYY/jMM/jDD"
	);
	const endTime = moment(
		toEnglishDigits(props.searchData.endTime),
		"jYYYY/jMM/jDD"
	);

	let attendance = endTime.subtract(startTime.jYear(), "jYear");
	attendance = attendance.subtract(startTime.jMonth(), "jMonth");
	attendance = attendance.subtract(startTime.jDate(), "day");

	return `${attendance.format("jD")} شب`;
});

const passengers = computed(() => `${props.searchData.passengers} مسافر`);
</script>

<style scoped>
.hotel {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

.hotel__body {
	display: flex;
	flex-wrap: wrap;
	gap: 3rem;
}

.hotel__image {
	height: 18rem;
	width: 30rem;
}

.hotel__image-img {
	width: 100%;
	height: 100%;
	border-radius: 0 24px 24px 0;
}

.hotel__description {
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2rem;
}

.hotel__star,
.hotel__address {
	display: flex;
	gap: 1rem;
}

.hotel__address-icon,
.hotel__star-icon {
	width: 2rem;
	height: 2rem;
	fill: var(--color-primary-900);
}

.hotel__reserve {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 4rem;
	border-right: 1px solid lightgray;
	gap: 1rem;
}

.hotel__detail {
	background-color: burlywood;
	padding: 0.5rem 1rem;
	border-radius: 24px;
}

.hotel__reserve-button {
	margin: 0;
}
</style>
