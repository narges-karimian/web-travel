<template>
	<div class="select">
		<div class="select__wrapper">
			<base-input
				v-model="inputValue"
				class="input-group--outline select__input"
				:name="name"
				:label="label"
				:rightIcon="icon"
				readonly
				@click="showList">
			</base-input>
			<ul
				class="select__options"
				v-if="show">
				<li class="select__option-item">
					<span>بزرگسال(۱۲ سال به بالا)</span>
					<div class="select__option-action">
						<base-button
							class="button--filled select__option-btn"
							icon="up"
							@click="addToAdult(1)">
						</base-button>
						<span>{{ adult }}</span>
						<base-button
							class="button--filled select__option-btn"
							icon="down"
							@click="addToAdult(-1)"
							:isDisabled="desableReduceAudult">
						</base-button>
					</div>
				</li>
				<li class="select__option-item">
					<span>کودک(۲ تا ۱۲ سال)</span>
					<div class="select__option-action">
						<base-button
							class="button--filled select__option-btn"
							icon="up"
							@click="addToBaby(1)">
						</base-button>
						<span>{{ baby }}</span>
						<base-button
							class="button--filled select__option-btn"
							icon="down"
							@click="addToBaby(-1)"
							:isDisabled="desableReducebaby">
						</base-button>
					</div>
				</li>
				<li class="select__option-item">
					<span>نوزاد(۱۰ روز تا ۲ سال)</span>
					<div class="select__option-action">
						<base-button
							class="button--filled select__option-btn"
							icon="up"
							@click="addToNewBorn(1)">
						</base-button>
						<span>{{ newBorn }}</span>
						<base-button
							class="button--filled select__option-btn"
							icon="down"
							@click="addToNewBorn(-1)"
							:isDisabled="desableReduceNewBorn">
						</base-button>
					</div>
				</li>
			</ul>
		</div>
		<div
			v-if="show"
			class="select__overlay"
			@click="closeList"></div>
	</div>
</template>

<script setup>
import { ref, computed, watchEffect } from "vue";

const props = defineProps({
	name: {
		type: String,
	},
	label: {
		type: String,
	},
	icon: {
		type: String,
	},
});

const adult = ref(1);
const baby = ref(0);
const newBorn = ref(0);
const show = ref(false);
const inputValue = ref(`${adult.value} بزرگسال `);

const desableReduceAudult = computed(() => adult.value === 1);
const desableReducebaby = computed(() => baby.value === 0);
const desableReduceNewBorn = computed(() => newBorn.value === 0);
watchEffect(() => {
	inputValue.value = `${adult.value} بزرگسال`;
	if (baby.value !== 0) {
		inputValue.value = inputValue.value + `,${baby.value} کودک`;
	}
	if (newBorn.value !== 0) {
		inputValue.value = inputValue.value + `,${newBorn.value} نوزاد`;
	}
});

function addToAdult(value) {
	adult.value = adult.value + value;
}

function addToBaby(value) {
	baby.value = baby.value + value;
}

function addToNewBorn(value) {
	newBorn.value = newBorn.value + value;
}

function showList() {
	show.value = !show.value;
}

function closeList() {
	show.value = false;
}
</script>

<style scoped>
.select {
	width: 100%;
}

.select__wrapper {
	position: relative;
}

.select__input {
	z-index: 1;
	font-family: "yekanBakh";
}

.select__options {
	z-index: 1;
	position: absolute;
	list-style: none;
	padding: 1rem 2rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 100%;
	box-shadow: 0px 0px 4px rgba(0, 67, 101, 0.05);
	background-color: #ffffff;
}

.select__option-item {
	border-bottom: 1px solid var(--color-gray-200);
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.select__option-action {
	display: flex;
	align-items: center;
	gap: 0.5rem;
}

.select__option-btn {
	width: 30px;
	height: 30px;
	padding: 0;
	border-radius: 50%;
}

.select__overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: transparent;
	z-index: 0;
}
</style>
