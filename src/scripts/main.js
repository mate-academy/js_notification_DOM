'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const body = document.querySelector('body');
  const notification = document.createElement('div');

  body.appendChild(notification);

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);

  notification.classList.add('notification', type);

  const titleElement = document.createElement('h2');
  const message = document.createElement('p');

  titleElement.textContent = title;
  message.textContent = description;
  titleElement.classList.add('title');

  notification.appendChild(titleElement);
  notification.appendChild(message);

  // if (notification.classList.contains('error')) {
  //   const currentTop = parseInt(notification.style.top || '0');

  //   notification.style.top = currentTop + 15 + 'px';
  // }
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
