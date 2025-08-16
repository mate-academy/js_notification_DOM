'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const titleOfNot = document.createElement('h2');
  const descOfNot = document.createElement('p');

  notification.classList.add('notification', type);
  titleOfNot.classList.add('title');

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  titleOfNot.textContent = title;

  descOfNot.textContent = description;

  notification.append(titleOfNot, descOfNot);
  document.body.append(notification);

  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.visibility = 'hidden';
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
