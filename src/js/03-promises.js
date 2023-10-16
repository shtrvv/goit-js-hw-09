import Notiflix from "notiflix";

const refs = {
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  btn: document.querySelector('[type="submit"]'),
}

refs.btn.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  e.preventDefault();

  const userStep = Number(refs.step.value);
  let userDelay = Number(refs.delay.value);

  for (let i = 1; i <= refs.amount.value; i += 1) {
    createMsg(i, userDelay);
    userDelay += userStep;
  }
}

function createMsg(position, delay) {
  setTimeout(() => {
      createPromise(position, delay)
        .then(val => Notiflix.Notify.success(val))
        .catch(err => Notiflix.Notify.failure(err));
    }, delay);
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      res(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      rej(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  })
}
