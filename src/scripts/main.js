'use strict';

function createElement(tagName, text) {
  const element = document.createElement(tagName);

  element.textContent = text;

  return element;
}

const pushNotification = (posTop, posRight, title, description, type) => {
  const html = document.documentElement;
  const notification = document.createElement('div');

  const notificationTitle = createElement('h2', title);
  const notificationDescription = createElement('p', description);

  notificationTitle.classList.add('title');
  notification.classList.add('notification', type);

  notification.append(notificationTitle);
  notification.append(notificationDescription);

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  html.append(notification);

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
