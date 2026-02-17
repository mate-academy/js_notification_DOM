'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const titleElement = document.createElement('h2');
  const paragraph = document.createElement('p');

  notification.classList.add('notification', type);
  notification.style.position = 'absolute';
  notification.style.right = `${posRight}px`;
  notification.style.top = `${posTop}px`;

  titleElement.classList.add('title');
  paragraph.classList.add('description');
  titleElement.textContent = title;
  paragraph.textContent = description;

  notification.append(titleElement, paragraph);
  document.body.append(notification);

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
