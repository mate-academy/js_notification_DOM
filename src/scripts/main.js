'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');
  const body = document.querySelector('body');
  const alertTitle = document.createElement('h2');
  const message = document.createElement('p');

  element.classList.add('notification', type);
  alertTitle.classList.add('title');
  alertTitle.innerHTML = title;
  message.innerHTML = description;

  element.append(alertTitle, message);
  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;

  body.append(element);

  setTimeout(() => {
    element.style.visibility = 'hidden';
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
