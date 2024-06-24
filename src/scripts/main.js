'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  const notTitle = document.createElement('h2');

  notTitle.textContent = title;
  notTitle.className = 'title';

  const notDescription = document.createElement('p');

  notDescription.textContent = description;

  notification.appendChild(notTitle);
  notification.appendChild(notDescription);

  document.body.append(notification);

  setTimeout(() => (notification.style.visibility = 'hidden'), 2000);
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
