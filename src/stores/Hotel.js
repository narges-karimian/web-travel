import { defineStore } from "pinia";
import hotels from "@/static/hotels.json";

export const useHotelStore = defineStore("hotels", {
	state: () => {
		return {
			hotelList: [],
			searchData: {},
		};
	},
	actions: {
		search(payload) {
			this.hotelList = hotels.filter((hotel) => hotel.Region === payload.city);
			this.searchData = { ...payload };
		},
		getHotelById(id) {
			for (const hotel of this.hotelList) {
				if (hotel.ID == id) return hotel;
			}
		},
	},
	persist: true,
});
