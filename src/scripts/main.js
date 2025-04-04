'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  const titleEl = document.createElement('h2');

  titleEl.classList.add('title');
  titleEl.textContent = title;

  const descEl = document.createElement('p');

  descEl.textContent = description;

  notification.appendChild(titleEl);
  notification.appendChild(descEl);

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.transition = 'opacity 0.5s';
    notification.style.opacity = '0';
    setTimeout(() => notification.remove(), 500);
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
