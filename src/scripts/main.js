'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const ntfTitle = document.createElement('h2');
  const ntfDescription = document.createElement('p');

  notification.classList.add('notification', type);
  ntfTitle.classList.add('title');

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  ntfTitle.textContent = title;
  ntfDescription.textContent = description;

  notification.append(ntfTitle, ntfDescription);
  document.body.appendChild(notification);

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
  160,
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
