'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification');
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  switch (type) {
    case 'success':
      notification.classList.add('success');
      break;
    case 'warning':
      notification.classList.add('warning');
      break;
    case 'error':
      notification.classList.add('error');
  }

  const notifTitle = document.createElement('h2');

  notifTitle.textContent = title;
  notifTitle.classList.add('title');

  const notifDesc = document.createElement('p');

  notifDesc.innerText = description;

  notification.append(notifTitle, notifDesc);

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
