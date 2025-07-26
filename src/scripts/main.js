'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const notification = document.createElement('div');
  const titleEl = document.createElement('h2');
  const descrEl = document.createElement('p');

  titleEl.innerText = title;
  descrEl.innerText = description;

  notification.classList.add('notification', `${type}`);
  titleEl.classList.add('title');
  notification.append(titleEl, descrEl);
  document.body.append(notification);

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  setTimeout(() => (notification.style.display = 'none'), 2000);
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
