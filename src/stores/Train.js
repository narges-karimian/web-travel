import { defineStore } from "pinia";
import trains from "@/static/trains.json";

export const useTrainStore = defineStore("trains", {
	state: () => {
		return {
			trainDepartureList: [],
			trainArrivalList: [],
		};
	},
	actions: {
		searchDeparture(payload) {
			this.trainDepartureList = trains.filter(
				(train) =>
					train.Departure === payload.from &&
					train.Arrival === payload.to
			);
			console.log(this.trainDepartureList);
		},
		searchArrival(payload) {
			this.trainArrivalList = trains.filter(
				(trains) =>
					trains.Departure === payload.to &&
					trains.Arrival === payload.from
			);
		},
	},
	persist: true,
});
