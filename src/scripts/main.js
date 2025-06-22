'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.setAttribute('class', `notification ${type}`);

  notification.style.right = `${posRight}px`;
  notification.style.top = `${posTop}px`;

  const h2 = document.createElement('h2');

  h2.setAttribute('class', 'title');
  h2.textContent = title;

  const p = document.createElement('p');

  p.setAttribute('class', 'description');
  p.textContent = description;

  notification.appendChild(h2);
  notification.appendChild(p);

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.display = 'none';
  }, 2500);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  165,
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
