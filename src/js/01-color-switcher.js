const refs = {
  startbtn: document.querySelector('[data-start]'),
  stopbtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

refs.startbtn.addEventListener('click', startParty);

refs.stopbtn.addEventListener('click', stopParty);

let timerId = null;

function startParty() {
  refs.startbtn.disabled = true;
  timerId = setInterval(() => {
    const colorHex = getRandomHexColor();
    console.log(colorHex);
    refs.body.style.backgroundColor = colorHex;
  }, 1000);
}

function stopParty() {
  refs.startbtn.disabled = false;
  clearInterval(timerId);
  console.log(`timerStop`);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
