'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationEl = document.createElement('div');
  const titleEl = document.createElement('h2');
  const descriptionEl = document.createElement('p');

  titleEl.textContent = title;
  descriptionEl.textContent = description;

  notificationEl.classList.add('notification');
  notificationEl.classList.add(`${type}`);
  titleEl.classList.add('title');

  notificationEl.style.top = `${posTop}px`;
  notificationEl.style.right = `${posRight}px`;

  document.body.append(notificationEl);
  notificationEl.append(titleEl, descriptionEl);

  setTimeout(() => {
    notificationEl.style.display = 'none';
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
