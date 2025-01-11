'use strict';

const body = document.body;

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification');
  notification.classList.add(`${type}`);
  notification.style.top = `${posTop}px`;
  notification.style.right = posRight + 'px';

  const titleBlock = document.createElement('h2');

  titleBlock.classList.add('title');
  titleBlock.innerText = title;

  notification.appendChild(titleBlock);

  const message = document.createElement('p');

  message.innerText = description;
  notification.appendChild(message);

  body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
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
