export const toPersianDigits = function (englishDigit) {
	const id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
	return englishDigit.replace(/[0-9]/g, function (w) {
		return id[+w];
	});
};
