'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  const titleElem = document.createElement('h2');

  titleElem.classList.add('title');
  titleElem.textContent = title;

  const descriptionElem = document.createElement('p');

  descriptionElem.textContent = description;

  notification.appendChild(titleElem);
  notification.appendChild(descriptionElem);

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.visibility = `hidden`;
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
