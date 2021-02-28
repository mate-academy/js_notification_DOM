'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationElement = document.createElement('div');
  const titleElement = document.createElement('h2');
  const descriptionElement = document.createElement('p');

  notificationElement.classList.add('notification', type);
  notificationElement.style.top = `${posTop}px`;
  notificationElement.style.right = `${posRight}px`;

  titleElement.classList.add('title');
  titleElement.style.fontSize = '18px'; // optional
  titleElement.textContent = title;

  descriptionElement.textContent = description;

  notificationElement.append(titleElement, descriptionElement);
  document.body.append(notificationElement);

  setTimeout(() => notificationElement.remove(), 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
