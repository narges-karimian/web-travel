<template>
	<div class="card train">
		<div class="train__body">
			<div class="train__general-information">
				<div class="train__logo">
					<img
						class="train__img"
						src="https://cdn.alibaba.ir/static/img/train/train_14.png"
						alt="train logo" />
				</div>
				<div class="train__information">
                    <div class="train__type">
                        <span class="pill">پارسی </span>
                        <span class="pill">مهتاب سیرجم</span>
                    </div>
					<div class="train__path">
						<div class="train__start-point">
							<span class="train__start-time">16:30</span>
							<span class="train__start-name">تهران</span>
						</div>
						<div class="train__way"></div>
						<div class="train__end-point">
							<span class="train__end-time">04:30</span>
							<span class="train__end-name">مشهد</span>
						</div>
					</div>
				</div>
			</div>
			<div class="train__details"></div>
		</div>
		<div class="train__reserve fort-caption">
			<div class="train__capacity">1 نفر ظرفیت</div>
			<div class="train__price font-body_1">hotel price تومان</div>
			<base-button class="train__reserve-button button--filled">
				انتخاب بلیط
			</base-button>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
.train {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}

.train__reserve {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 4rem;
	border-right: 1px solid lightgray;
}

.train__capacity {
	background-color: burlywood;
	padding: 0.5rem 1rem;
	border-radius: 24px;
}

.train__general-information {
	padding: 4rem;
    display: flex;
    gap: 2rem;
    align-items: center;
}

.train__img {
    border: 1px solid lightgray;
    border-radius: 50%;
}

.pill {
	background-color: lightgray;
	padding: 0.5rem 1rem;
	border-radius: 24px;
}
</style>
