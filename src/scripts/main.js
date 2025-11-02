'use strict';

const pushNotification = (coordinates, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  const { posTop, right } = coordinates;

  notification.setAttribute('style', `top: ${posTop}px; right: ${right}px;`);

  const h2 = document.createElement('h2');

  h2.classList.add('title');
  h2.textContent = title;

  const p = document.createElement('p');

  p.textContent = description;

  notification.append(h2, p);

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
};

pushNotification(
  { top: 10, right: 10 },
  'Title of Success message',
  'Message example.\n Notification should contain title and description.',
  'success',
);

pushNotification(
  { top: 150, right: 10 },
  'Title of Error message',
  'Message example.\n Notification should contain title and description.',
  'error',
);

pushNotification(
  { top: 290, right: 10 },
  'Title of Warning message',
  'Message example.\n Notification should contain title and description.',
  'warning',
);
