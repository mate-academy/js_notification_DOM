'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const titleElement = document.createElement('h2');
  const descriptionElement = document.createElement('p');

  notification.classList.add('notification');
  notification.classList.add(type);

  titleElement.classList.add('title');

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  descriptionElement.style.whiteSpace = 'pre-line';

  titleElement.textContent = title;
  descriptionElement.textContent = description;

  notification.append(titleElement);
  notification.append(descriptionElement);

  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);

  document.querySelector('body').append(notification);
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
