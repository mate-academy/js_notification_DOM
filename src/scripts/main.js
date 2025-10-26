'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const container = document.createElement('div');

  container.classList.add('notification', type);
  container.style.right = `${posRight}` + 'px';
  container.style.top = `${posTop}` + 'px';

  const notificationTitle = document.createElement('h2');

  notificationTitle.classList.add('title');
  notificationTitle.textContent = title;

  const notificationMessage = document.createElement('p');

  notificationMessage.textContent = description;

  container.appendChild(notificationTitle);
  container.appendChild(notificationMessage);
  document.body.appendChild(container);

  setTimeout(() => {
    container.style.display = 'none';
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
