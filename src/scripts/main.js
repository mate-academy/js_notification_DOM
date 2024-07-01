'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationMessage = document.createElement('div');

  notificationMessage.style.top = posTop + 'px';
  notificationMessage.style.right = posRight + 'px';

  notificationMessage.className = `notification ${type}`;

  const notificationTitle = document.createElement('h2');

  notificationTitle.innerText = `${title}`;
  notificationTitle.className = 'title';
  notificationMessage.append(notificationTitle);

  const notificationDescription = document.createElement('p');

  notificationDescription.textContent = description;
  notificationMessage.append(notificationDescription);

  document.body.appendChild(notificationMessage);

  setTimeout(() => (notificationMessage.style.display = 'none'), 2000);
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
