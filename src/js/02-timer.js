import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const dataInt = document.querySelector('input#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

btnStart.disabled = true;
let select = 0;
let nowDate = 0;
let convert = 0;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    select = selectedDates[0].getTime();
    nowDate = new Date().getTime();
    if (nowDate > select) {
      window.alert('Please choose a date in the future');
    } else {
      btnStart.disabled = false;
      console.log(select);
      console.log(nowDate);
    }
  },
};
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const total = ms < 0 ? 0 : ms;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  // console.log(days, hours, minutes, second);
  return { total, days, hours, minutes, seconds };
}
btnStart.addEventListener('click', () => {
  const timer = setInterval(() => {
    nowDate = new Date().getTime();
    convert = convertMs(select - nowDate);
    attachToEl();
    console.log(convert);
    if (convert.total <= 1000) {
      clearInterval(timer);
    }
  }, 1000);
});

function attachToEl() {
  timerDays.textContent = addLeadingZero(convert.days);
  timerHours.textContent = addLeadingZero(convert.hours);
  timerMinutes.textContent = addLeadingZero(convert.minutes);
  timerSeconds.textContent = addLeadingZero(convert.seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

flatpickr(dataInt, options);
