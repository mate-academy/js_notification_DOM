'use strict';

const body = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  if (!type) {
    return;
  }

  const topPx = `${posTop}px`;
  const rightPx = `${posRight}px`;

  const notification = document.createElement('div');
  const titleElement = document.createElement('h2');
  const descriptionElement = document.createElement('p');

  notification.classList.add('notification', type);
  titleElement.classList.add('title');

  titleElement.innerText = title;
  descriptionElement.innerText = description;

  notification.style.top = topPx;
  notification.style.right = rightPx;

  notification.appendChild(titleElement);
  notification.appendChild(descriptionElement);
  body.appendChild(notification);

  hiddenNotification(notification);
};

const hiddenNotification = (elem) => {
  setTimeout(() => {
    elem.style.visibility = 'hidden';
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
