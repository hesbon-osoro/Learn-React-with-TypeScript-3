function daysInMonth(m, y) {
	var days = new Date(y, m, 0).getDate();
	var sundays = [8 - new Date(m + '/01/' + y).getDay()];
	let saturdays = [7 - new Date(m + '/01/' + y).getDay()];
	let fridays = [6 - new Date(m + '/01/' + y).getDay()];
	let thursdays = [5 - new Date(m + '/01/' + y).getDay()];
	let wednesdays = [4 - new Date(m + '/01/' + y).getDay()];
	let tuesdays = [3 - new Date(m + '/01/' + y).getDay()];
	let mondays = [2 - new Date(m + '/01/' + y).getDay()];

	for (var i = sundays[0] + 7; i <= days; i += 7) {
		sundays.push(i);
	}

	for (var i = saturdays[0] + 7; i <= days; i += 7) {
		saturdays.push(i);
	}
	for (var i = fridays[0] + 7; i <= days; i += 7) {
		fridays.push(i);
	}
	for (var i = thursdays[0] + 7; i <= days; i += 7) {
		thursdays.push(i);
	}
	for (var i = wednesdays[0] + 7; i <= days; i += 7) {
		wednesdays.push(i);
	}
	for (var i = tuesdays[0] + 7; i <= days; i += 7) {
		tuesdays.push(i);
	}
	for (var i = mondays[0] + 7; i <= days; i += 7) {
		mondays.push(i);
	}

	sundays = sundays.filter(i => i > 0);
	saturdays = saturdays.filter(i => i > 0);
	fridays = fridays.filter(i => i > 0);
	thursdays = thursdays.filter(i => i > 0);
	wednesdays = wednesdays.filter(i => i > 0);
	tuesdays = tuesdays.filter(i => i > 0);
	mondays = mondays.filter(i => i > 0);

	let daysCount = {
		sundaysCount: sundays.length,
		mondaysCount: mondays.length,
		tuesdaysCount: tuesdays.length,
		wednesdaysCount: wednesdays.length,
		thursdaysCount: thursdays.length,
		fridaysCount: fridays.length,
		saturdaysCount: saturdays.length,
	};

	return daysCount;
}

const mostFrequentDays = year => {
	let sundays = 0;
	let mondays = 0;
	let tuesdays = 0;
	let wednesdays = 0;
	let thursdays = 0;
	let fridays = 0;
	let saturdays = 0;

	for (let i = 1; i <= 12; i++) {
		sundays += daysInMonth(i, year).sundaysCount;
		mondays += daysInMonth(i, year).mondaysCount;
		tuesdays += daysInMonth(i, year).tuesdaysCount;
		wednesdays += daysInMonth(i, year).wednesdaysCount;
		thursdays += daysInMonth(i, year).thursdaysCount;
		fridays += daysInMonth(i, year).fridaysCount;
		saturdays += daysInMonth(i, year).saturdaysCount;
	}

	let maxCount = Math.max(
		sundays,
		mondays,
		tuesdays,
		wednesdays,
		thursdays,
		fridays,
		saturdays
	);

	let mostFrequentDays = [];

	if (maxCount === sundays) {
		mostFrequentDays.push('Sunday');
	}
	if (maxCount === mondays) {
		mostFrequentDays.push('Monday');
	}
	if (maxCount === tuesdays) {
		mostFrequentDays.push('Tuesday');
	}
	if (maxCount === wednesdays) {
		mostFrequentDays.push('Wednesday');
	}
	if (maxCount === thursdays) {
		mostFrequentDays.push('Thursday');
	}
	if (maxCount === fridays) {
		mostFrequentDays.push('Friday');
	}
	if (maxCount === saturdays) {
		mostFrequentDays.push('Saturday');
	}

	return mostFrequentDays;
};

console.table(mostFrequentDays(2860));
