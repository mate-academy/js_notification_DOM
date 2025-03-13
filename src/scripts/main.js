'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const element = document.createElement('div');
  const h2 = document.createElement('h2');
  const body = document.querySelector('body');
  // eslint-disable-next-line no-undef
  const p = document.createElement('p');

  element.classList.add('notification', type);

  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;

  h2.textContent = title;
  h2.classList.add('title');

  p.textContent = description;

  element.appendChild(h2);
  element.appendChild(p);
  // eslint-disable-next-line no-console
  console.log(element);

  body.appendChild(element);

  setTimeout(() => {
    element.style.display = 'none';
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
