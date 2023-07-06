import { createRouter, createWebHistory } from "vue-router";
import { toast } from "vue3-toastify";

const AuthLayout = () => import("@/layout/AuthLayout.vue");
const MainLayout = () => import("@/layout/MainLayout.vue");
const LoginForm = () => import("@/views/auth/LoginForm.vue");
const RegisterForm = () => import("@/views/auth/RegisterForm.vue");
const PlanePage = () => import("@/views/app/PlanePage.vue");
const TrainPage = () => import("@/views/app/TrainPage.vue");
const HotelPage = () => import("@/views/app/HotelPage.vue");
const NotFound = () => import("@/views/NotFound.vue");
const SearchPage = () => import("@/views/app/SearchPage.vue");

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", name: "firstPage", redirect: { name: "plane" } },
		{
			path: "/auth",
			name: "auth",
			component: AuthLayout,
			redirect: { name: "login" },
			meta: { requiresUnauth: true },
			children: [
				{
					path: "/login",
					name: "login",
					component: LoginForm,
				},
				{
					path: "/register",
					name: "register",
					component: RegisterForm,
				},
			],
		},
		{
			path: "/main",
			name: "main",
			component: MainLayout,
			redirect: { name: "home" },
			meta: { requiresAuth: true },
			children: [
				{
					path: "/train",
					name: "train",
					component: TrainPage,
				},
				{
					path: "/plane",
					name: "plane",
					component: PlanePage,
				},
				{
					path: "/hotel",
					name: "hotel",
					component: HotelPage,
				},
			],
		},
		{ path: "/search/:type", name: "searchPage", component: SearchPage },
		{ path: "/:notFound(.*)", component: NotFound },
	],
});

// router.beforeEach(function (to, from) {
//   const isLoggedIn = $cookies.get("token");

//   if (to.meta.requiresAuth && !isLoggedIn) {
//     toast.error('لطفا ابتدا وارد شوید.');
//     return { name: 'auth' };
//   } else if (to.meta.requiresUnauth && !!isLoggedIn) {
//     toast.error('لطفا ابتدا خارج شوید سپس مجدد وارد شوید.');
//     return { name: 'home' };
//   } else {
//     return true
//   }
// })

export default router;
