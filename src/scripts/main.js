'use strict';

const body = document.querySelector('body');
let div;
let head;
let text;

const pushNotification = (top, right, title, description, type) => {
  div = body.insertAdjacentElement('afterbegin', document.createElement('div'));
  div.classList.add('notification', type);

  div.style.top = top;
  div.style.right = right;

  head = div.insertAdjacentElement('afterbegin', document.createElement('h2'));
  head.classList.add('tittle');
  head.innerText = title;

  text = head.insertAdjacentElement('afterend', document.createElement('p'));
  text.innerText = description;

  setTimeout(() => {
    div.remove();
  }, 3000);
};

setTimeout(
  pushNotification,
  300,
  10,
  10,
  'Warning',
  'Your internet connection is unstable',
  'error'
);
