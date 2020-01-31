// Returns the day of the week for the given date.
function dayName(date) {
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                         "Thursday", "Friday", "Saturday"];
  return daysOfTheWeek[date.getDay()];
}

// Returns a greeting using the date
function greeting(date){
	return `Hello world! Happy ${dayName(date)}!`
}