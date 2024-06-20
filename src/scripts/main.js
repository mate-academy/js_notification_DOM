'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const elem = document.createElement('div');
  const h2 = document.createElement('h2');
  const text = document.createElement('p');

  elem.classList.add('notification', type);
  elem.style.top = `${posTop}px`;
  elem.style.right = `${posRight}px`;

  h2.classList.add('title');
  h2.textContent = title;
  text.textContent = description;

  elem.append(h2, text);

  body.append(elem);

  setTimeout(() => (elem.style.visibility = 'hidden'), 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
