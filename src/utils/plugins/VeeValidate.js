import { defineRule, configure } from "vee-validate";
import { localize } from "@vee-validate/i18n";
import fa from "@vee-validate/i18n/dist/locale/fa.json";
import AllRules from "@vee-validate/rules";

export default {
	install: (app, options) => {
		Object.keys(AllRules).forEach((rule) => {
			defineRule(rule, AllRules[rule]);
		});
		defineRule("password", (value) => {
			if (!value || !value.length) {
				return true;
			}
			const specialCaracters = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
			const persianLetters = /^[\u0600-\u06FF\s]+$/;

			if (persianLetters.test(value)) {
				return "رمز عبور باید شامل حروف انگلیسی باشد.";
			}
			if (!/\d/.test(value)) {
				return "رمز عبور باید شامل عدد باشد.";
			}
			if (!/[A-Z]/.test(value)) {
				return "رمز عبور باید شامل حروف بزرگ باشد.";
			}
			if (!specialCaracters.test(value)) {
				return "رمز عبور باید شامل کاراکترهای خاص باشد.";
			}
			return true;
		});

		localize({ fa });
		configure({
			generateMessage: localize("fa"),
		});
	},
};
