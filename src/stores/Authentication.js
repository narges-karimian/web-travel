import { defineStore } from "pinia";

export const useUserAuthStore = defineStore("userAuth", {
	state: () => {
		return {
			firstName: null,
			lastName: null,
		};
	},
	actions: {
		async login(payload) {
			this.setUser();
		},
		async register(payload) {},
		setUser(payload) {},
		autoLogin() {},
		logout() {},
	},
	persist: true,
});
