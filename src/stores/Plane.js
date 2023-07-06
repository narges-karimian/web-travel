import { defineStore } from "pinia";
import plains from "@/static/planes.json";

export const usePlaneStore = defineStore("planes", {
	state: () => {
		return {
			planeDepartureList: [],
			planeArrivalList: [],
		};
	},
	actions: {
		searchDeparture(payload) {
			this.planeDepartureList = plains.filter(
				(plain) =>
					plain.Departure === payload.from &&
					plain.Arrival === payload.to &&
					plain.Date === payload.startTime
			);
			console.log(this.planeDepartureList);
		},
		searchArrival(payload) {
			this.planeArrivalList = plains.filter(
				(plain) =>
					plain.Departure === payload.to &&
					plain.Arrival === payload.from &&
					plain.Date === payload.endTime
			);
		},
	},

	persist: true,
});
