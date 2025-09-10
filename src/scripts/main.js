'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification');

  const checkForType = ['success', 'error', 'warning'];

  if (checkForType.includes(type)) {
    notification.classList.add(type);
  } else {
    notification.classList.add('error');
  }

  notification.style.position = 'fixed';
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  const titleOfMessage = document.createElement('h2');

  titleOfMessage.classList.add('title');
  titleOfMessage.textContent = title;

  const descriptionOfMessage = document.createElement('p');

  descriptionOfMessage.textContent = description;

  notification.appendChild(titleOfMessage);
  notification.appendChild(descriptionOfMessage);

  document.body.appendChild(notification);

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
