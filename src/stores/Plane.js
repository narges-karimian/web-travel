import { defineStore } from "pinia";
import plains from "@/static/planes.json";

export const usePlaneStore = defineStore("planes", {
	state: () => {
		return {
			planeDepartureList: [],
			planeArrivalList: [],
			searchPlaneData: {},
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
			this.searchPlaneData = { ...payload };
		},
		searchArrival(payload) {
			this.planeArrivalList = plains.filter(
				(plain) =>
					plain.Departure === payload.to &&
					plain.Arrival === payload.from &&
					plain.Date === payload.endTime
			);
			this.searchPlaneData = { ...payload };
		},
		getDeparturePlaneById(id) {
			for (const plane of this.planeDepartureList) {
				if (plane.ID == id) return plane;
			}
		},
		getArrivalPlaneById(id) {
			for (const plane of this.planeArrivalList) {
				if (plane.ID == id) return plane;
			}
		},
	},

	persist: true,
});
