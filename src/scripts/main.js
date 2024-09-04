'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const notification = document.createElement('div');

  notification.classList.add('notification');
  notification.classList.add(type);
  notification.style.width = '320px';

  const titleOfNotification = document.createElement('h2');

  titleOfNotification.classList.add('title');
  titleOfNotification.textContent = title;

  const descriptionOfNotification = document.createElement('p');

  descriptionOfNotification.textContent = description;

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  setTimeout(() => {
    body.append(notification);
    notification.appendChild(titleOfNotification);
    notification.appendChild(descriptionOfNotification);
  }, '1000');
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
