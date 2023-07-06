// import axios from "axios";
// import { useCookies } from "@vueuse/integrations/useCookies";
// import { toast } from "vue3-toastify";

// const cookies = useCookies();

// export const myAxios = axios.create({
// 	headers: {
// 		"Content-Type": "application/json",
// 		"gateway-system": "intern_4",
// 	},
// });

// myAxios.interceptors.request.use(function (config) {
// 	config.headers["gateway-token"] = cookies.get("token");
// 	return config;
// });

// myAxios.interceptors.response.use(
// 	function (response) {
// 		return response;
// 	},
// 	function (error) {
// 		let errorMassage = "خطای ارتباط با سرور";
// 		if (error.response) errorMassage = error.response.data.data.message.fa;
// 		toast.error(errorMassage);
// 		Promise.reject(error);
// 	}
// );

// export default myAxios;
