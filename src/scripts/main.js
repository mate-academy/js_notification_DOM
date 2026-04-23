'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationContainer = document.createElement('div');

  notificationContainer.classList.add('notification');
  notificationContainer.classList.add(type);
  notificationContainer.style.top = posTop + 'px';
  notificationContainer.style.right = posRight + 'px';

  const notificationTitle = document.createElement('h2');

  notificationTitle.classList.add('title');
  notificationTitle.textContent = title;

  const notificationDescription = document.createElement('p');

  notificationDescription.textContent = description;

  notificationContainer.appendChild(notificationTitle);
  notificationContainer.appendChild(notificationDescription);

  document.body.appendChild(notificationContainer);

  setTimeout(() => {
    notificationContainer.style.display = 'none';
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
