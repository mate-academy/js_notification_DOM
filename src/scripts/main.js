'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  const titleElement = document.createElement('h2');

  titleElement.textContent = title;
  titleElement.className = 'title';

  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;

  notification.appendChild(titleElement);
  notification.appendChild(descriptionElement);

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
