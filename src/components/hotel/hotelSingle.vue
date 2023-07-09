<template>
	<div class="hotel-page body_1">
		<h3 class="hotel-page__title">{{ hotel.Name }}</h3>
		<div class="hotel-page__star">
			<template v-for="star in hotel.StarRating">
				<star-icon class="hotel-page__star-icon"></star-icon>
			</template>
		</div>
		<div class="hotel-page__address">{{ hotel.Address }}</div>
		<div class="hotel-page__image-container">
			<img
				class="hotel-page__image"
				:src="hotel.ThumbNailUrl"
				:alt="hotel.Name" />
		</div>
		<div>{{ hotel.Description }}</div>
		<div class="hotel-page__rooms">
			<div
				v-for="(room, index) in hotel.AccommodationRooms"
				:key="index"
				class="hotel-page__room-item card">
				<h5>{{ room.Name }}</h5>
				<div>{{ roomPrice(room) }} تومان</div>
				<base-button class="button--filled">انتخاب اتاق</base-button>
			</div>
		</div>
		<div class="hotel-page__passengers">
			<user-info-card
				v-for="user in parseInt(passengers)"
				:key="user"
				@on-submit=""></user-info-card>
		</div>
		<base-button class="button--filled">تایید نهایی و رزرو</base-button>
	</div>
</template>

<script setup>
import { useHotelStore } from "@/stores/Hotel";
import StarIcon from "@/assets/icons/cardIcons/star.svg";
import UserInfoCard from "@/components/UserInfoCard.vue";

const props = defineProps({
	id: {
		type: [String, Number],
		required: true,
	},
	passengers: {
		type: [String, Number],
		required: true,
	},
	attendance: {
		type: [String, Number],
		required: true,
	},
});

const hotel = useHotelStore().getHotelById(props.id);

function roomPrice(room) {
	return room.Price * props.passengers;
}
</script>

<style scoped>
.hotel-page {
	text-align: center;
	max-width: 90%;
	margin: auto;
}

.hotel-page__star-icon {
	width: 2rem;
	height: 2rem;
	fill: gold;
	vertical-align: middle;
}

.hotel-page__image-container {
	margin: 1rem auto;
}

.hotel-page__image {
	max-width: 60rem;
	border-radius: 24px;
}

.hotel-page__rooms {
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
	margin: 2rem 0;
	align-items: center;
	justify-content: center;
}

.hotel-page__room-item {
	box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
	padding: 20px;
	margin: 0;
}

.hotel-page__passengers {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}
</style>
