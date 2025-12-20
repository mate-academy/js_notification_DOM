'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const notificationContainer = document.createElement('div');

  notificationContainer.style.position = 'fixed';
  notificationContainer.style.top = `${posTop}px`;
  notificationContainer.style.right = `${posRight}px`;
  document.body.appendChild(notificationContainer);

  const notification = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationDescription = document.createElement('p');

  notificationTitle.textContent = title;
  notificationDescription.textContent = description;

  notification.appendChild(notificationTitle);
  notification.appendChild(notificationDescription);

  notification.classList.add('notification');
  notificationTitle.classList.add('title');

  switch (type) {
    case 'success':
      notification.classList.add('success');
      break;
    case 'error':
      notification.classList.add('error');
      break;
    case 'warning':
      notification.classList.add('warning');
      break;
  }

  notificationContainer.appendChild(notification);

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
