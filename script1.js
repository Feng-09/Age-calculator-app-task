"use strict";
const today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth() + 1;
let currentDay = today.getDate();
let btn = document.getElementById("button");
let showYear = document.getElementById("years");
let showMonth = document.getElementById("months");
let showDay = document.getElementById("days");
let regday = document.getElementById("regday");
let regmonth = document.getElementById("regmonth");
let regyear = document.getElementById("regyear");
let dayInput = document.getElementById("day");
let monthInput = document.getElementById("month");
let yearInput = document.getElementById("year");
let yearResult;
let monthResult;
let dayResult;

btn.addEventListener("click", () => {
  let year = document.getElementById("year").value;
  let month = document.getElementById("month").value;
  let day = document.getElementById("day").value;

  let displayYear = currentYear - year;
  let displayMonth = currentMonth - month;
  let displayDay = currentDay - day;
  let addDay;
  let maxDay;

  switch (currentMonth) {
    case 2:
      addDay = 28;
      break;
    case 4:
      addDay = 30;
      break;
    case 6:
      addDay = 30;
      break;
    case 9:
      addDay = 30;
      break;
    case 11:
      addDay = 30;
      break;
    default:
      addDay = 31;
  }

  switch (month) {
    case "02":
      if (year % 4 == 0) {
        maxDay = 29;
      } else {
        maxDay = 28;
      }
      break;
    case "04":
      maxDay = 30;
      break;
    case "06":
      maxDay = 30;
      break;
    case "09":
      maxDay = 30;
      break;
    case "11":
      maxDay = 30;
      break;
    default:
      maxDay = 31;
  }

  if (Boolean(day) === false) {
    document.getElementById("req1").innerHTML = "This field is required";
    regday.classList.add("required");
    dayInput.classList.add("required");
  }

  if (Boolean(month) === false) {
    document.getElementById("req2").innerHTML = "This field is required";
    regmonth.classList.add("required");
    monthInput.classList.add("required");
  }

  if (Boolean(year) === false) {
    document.getElementById("req3").innerHTML = "This field is required";
    regyear.classList.add("required");
    yearInput.classList.add("required");
  }

  if (day > maxDay) {
    document.getElementById("req1").innerHTML = "Must be a valid day";
    dayInput.classList.add("required");
    regday.classList.add("required");
    day = false;
  }

  if (month > 12) {
    document.getElementById("req2").innerHTML = "Must be a valid month";
    regmonth.classList.add("required");
    monthInput.classList.add("required");
    month = false;
  }

  if (year > new Date().getFullYear()) {
    document.getElementById("req3").innerHTML = "Must be in the past";
    regyear.classList.add("required");
    yearInput.classList.add("required");
    year = false;
  }

  if (
    Boolean(day) === false ||
    Boolean(month) === false ||
    Boolean(year) === false
  ) {
    btn.removeEventListener();
  }

  if (displayMonth >= 0) {
    yearResult = displayYear;
    monthResult = displayMonth;
  } else {
    yearResult = displayYear - 1;
    monthResult = displayMonth + 12;
  }

  if (displayDay >= 0) {
    dayResult = displayDay;
  } else {
    monthResult -= 1;
    dayResult = displayDay + addDay;
  }

  let yearCounter = 0;
  let countUpYear = setInterval(countYear, 30);
  function countYear() {
    if (yearCounter == yearResult) {
      clearInterval(countUpYear);
      showYear.innerHTML = yearCounter;
    } else {
      yearCounter++;
      showYear.innerHTML = yearCounter;
    }
  }

  let monthCounter = 0;
  let countUpMonth = setInterval(countMonth, 30);
  function countMonth() {
    if (monthCounter == monthResult) {
      clearInterval(countUpMonth);
      showMonth.innerHTML = monthCounter;
    } else {
      monthCounter++;
      showMonth.innerHTML = monthCounter;
    }
  }

  let dayCounter = 0;
  let countUpDay = setInterval(countDay, 30);
  function countDay() {
    if (dayCounter == dayResult) {
      clearInterval(countUpDay);
      showDay.innerHTML = dayCounter;
    } else {
      dayCounter++;
      showDay.innerHTML = dayCounter;
    }
  }
});

dayInput.addEventListener("focus", () => {
  document.getElementById("req1").innerHTML = "";
  regday.classList.remove("required");
  dayInput.classList.remove("required");
});

monthInput.addEventListener("focus", () => {
  document.getElementById("req2").innerHTML = "";
  regmonth.classList.remove("required");
  monthInput.classList.remove("required");
});

yearInput.addEventListener("focus", () => {
  document.getElementById("req3").innerHTML = "";
  regyear.classList.remove("required");
  yearInput.classList.remove("required");
});

monthInput.addEventListener("change", () => {
  monthInput.value = String(monthInput.value).padStart(2, "0");
});
