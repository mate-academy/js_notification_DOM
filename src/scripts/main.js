'use strict';

const page = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');

  element.style.top = posTop + 'px';
  element.style.right = posRight + 'px';

  element.classList.add('notification', type);

  const message = document.createElement('h2');

  message.classList.add('title');

  message.textContent = title;

  const text = document.createElement('p');

  text.textContent = description;

  element.appendChild(message);
  element.appendChild(text);
  page.appendChild(element);

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
