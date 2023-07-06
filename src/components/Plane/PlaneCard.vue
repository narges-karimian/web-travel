<template>
	<div class="card hotel">
		<div class="hotel__body">
			<div class="hotel__image">
				<img
					class="hotel__image-img"
					src="https://cdn.alibaba.ir/ostorage/hotel-accommodation-images/2023-05-02/fb5c7039-3844-4ea7-9278-2a4a82478127.jpg?w=964"
					alt="hotel name" />
			</div>
			<div class="hotel__description font-caption">
				<h6 class="hotel__title">نام هتل</h6>
				<div class="hotel__star">
					<star-icon class="hotel__star-icon"></star-icon>
					<span>3 ستاره</span>
				</div>
				<div class="hotel__address">
					<location-icon class="hotel__address-icon"></location-icon>
					<span>ادرس هتل</span>
				</div>
			</div>
		</div>

		<div class="hotel__reserve font-caption">
			<div class="hotel__detail">4 شب 2 بزرگسال</div>
			<div class="hotel__price font-body_1">hotel price تومان</div>
			<base-button class="hotel__reserve-button button--filled">
				مشاهده اتاق ها و رزرو
			</base-button>
		</div>
	</div>
</template>

<script setup>
import StarIcon from "@/assets/icons/cardIcons/star.svg";
import LocationIcon from "@/assets/icons/cardIcons/star.svg";
</script>

<style scoped>
.hotel {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}

.hotel__body {
	display: flex;
	flex-wrap: wrap;
	gap: 3rem;
}

.hotel__image {
	height: 18rem;
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

.hotel__reserve {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 4rem;
	border-right: 1px solid lightgray;
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
