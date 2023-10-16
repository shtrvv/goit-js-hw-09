import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    startBtn: document.querySelector('[data-start]'),
    daysValue: document.querySelector('[data-days]'),
    hoursValue: document.querySelector('[data-hours]'),
    minutesValue: document.querySelector('[data-minutes]'),
    secondsValue: document.querySelector('[data-seconds]'),
}

refs.startBtn.addEventListener('click', onStartBtnClick);

refs.startBtn.setAttribute('disabled', true);
let selectedDay = null;
let timerId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= new Date()) {
            refs.startBtn.disabled = true;
            Notiflix.Notify.failure('Please choose a date in the future');
        } else {
            refs.startBtn.disabled = false;
            selectedDay = selectedDates[0];
        }
  },
}

const dateTimePicker = flatpickr('#datetime-picker', options);

function onStartBtnClick() {
    remainingTime();
    timerId = setInterval(remainingTime, 1000);
}

function remainingTime() {
    if (selectedDay <= new Date()) {
        clearInterval(id);
    }

    const time = convertMs(selectedDay - new Date());

    refs.daysValue.textContent = addLeadingZero(time.days);
    refs.hoursValue.textContent = addLeadingZero(time.hours);
    refs.minutesValue.textContent = addLeadingZero(time.minutes);
    refs.secondsValue.textContent = addLeadingZero(time.seconds);
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}