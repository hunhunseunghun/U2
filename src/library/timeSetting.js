// yyyyMMdd 날짜 문자열을 Date형으로 반환
export function to_date(date_str) {
	var yyyyMMdd = String(date_str);
	var sYear = yyyyMMdd.substring(0, 4);
	var sMonth = yyyyMMdd.substring(4, 6);
	var sDate = yyyyMMdd.substring(6, 8);

	return new Date(Number(sYear), Number(sMonth) - 1, Number(sDate));
}

//yyyy-MM-dd 날짜 문자열을 Date형으로 반환
export function to_date2(date_str) {
	var yyyyMMdd = String(date_str);
	var sYear = yyyyMMdd.substring(0, 4);
	var sMonth = yyyyMMdd.substring(5, 7);
	var sDate = yyyyMMdd.substring(8, 10);

	//alert("sYear :"+sYear +"   sMonth :"+sMonth + "   sDate :"+sDate);
	return new Date(Number(sYear), Number(sMonth) - 1, Number(sDate));
}

//Date형을 구분자로 구분된 형식의 날짜 문자열 변환
export function get_date_str_gubun(date, gubun) {
	var sYear = date.getFullYear();
	var sMonth = date.getMonth() + 1;
	var sDate = date.getDate();

	sMonth = sMonth > 9 ? sMonth : '0' + sMonth;
	sDate = sDate > 9 ? sDate : '0' + sDate;
	return sYear + gubun + sMonth + gubun + sDate;
}

//일 차이 : date2(일) - date1(일)
//date1 === '2021-07-01
export function between_date(date1, date2) {
	var y1970 = new Date(1970, 0, 1).getTime();
	var time1 = null;
	var time2 = null;

	if (date1.length > 8) time1 = to_date2(date1).getTime() - y1970;
	else time1 = to_date(date1).getTime() - y1970;

	if (date2.length > 8) time2 = to_date2(date2).getTime() - y1970;
	else time2 = to_date(date2).getTime() - y1970;

	var per_day = 1000 * 60 * 60 * 24; // 1일 밀리초

	return Math.floor(time1 / per_day) - Math.floor(time2 / per_day);
}

//dateFin === '2021-07-15T14:59:59+00:00'
export function calcRemainDays(dateFin) {
	var newDateFin = dateFin.split('T')[0];
	var newDateNow = get_date_str_gubun(new Date(), '-');
	return between_date(newDateFin, newDateNow);
}
export const isToday = (strDate) => {
	const today = new Date();
	const someDate = to_date2(strDate);
	return (
		someDate.getDate() == today.getDate() &&
		someDate.getMonth() == today.getMonth() &&
		someDate.getFullYear() == today.getFullYear()
	);
};
