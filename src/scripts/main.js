/* eslint-disable no-console */
'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  notification.setAttribute('class', `notification ${type}`);
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  h2.setAttribute('class', 'title');
  h2.textContent = title;
  p.textContent = description;

  notification.append(h2);
  notification.append(p);
  document.body.prepend(notification);

  setTimeout(() => {
    notification.style.display = 'none';
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
