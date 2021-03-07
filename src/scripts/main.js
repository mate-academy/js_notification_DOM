'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const bodyElemnt = document.querySelector('body');
  const notificationElement = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationDescription = document.createElement('p');

  const standartClassName = 'notification';

  notificationElement.classList.add(standartClassName, type);

  notificationElement.style.top = `${posTop}px`;
  notificationElement.style.right = `${posRight}px`;

  notificationTitle.style.fontSize = '18px';

  notificationElement.append(notificationTitle, notificationDescription);

  notificationTitle.innerText = title;
  notificationDescription.textContent = description;

  bodyElemnt.append(notificationElement);

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
