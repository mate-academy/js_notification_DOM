'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  document.body.appendChild(notification);
  notification.classList.add('notification');

  const h2 = document.createElement('h2');

  h2.textContent = title;
  notification.appendChild(h2);

  const about = document.createElement('p');

  about.textContent = description;
  notification.appendChild(about);

  if (type === 'warning') {
    notification.classList.add('warning');
  }

  if (type === 'error') {
    notification.classList.add('error');
  }

  if (type === 'success') {
    notification.classList.add('success');
  }

  notification.style.position = 'absolute';
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  setTimeout(() => {
    notification.remove();
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
