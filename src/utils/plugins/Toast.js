import "vue3-toastify/dist/index.css";
import Vue3Toastify from "vue3-toastify";

export default {
	install: (app, options) => {
		app.use(Vue3Toastify, {
			autoClose: 2000,
			rtl: true,
		});
	},
};
