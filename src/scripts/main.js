'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const blockMessage = document.createElement('div');

  blockMessage.classList.add('notification', type);

  blockMessage.style.top = `${posTop}px`;
  blockMessage.style.right = `${posRight}px`;

  const notifTitle = document.createElement('h2');

  notifTitle.className = 'title';
  notifTitle.textContent = title;

  const notifDescription = document.createElement('p');

  notifDescription.textContent = description;

  blockMessage.appendChild(notifTitle);
  blockMessage.appendChild(notifDescription);

  document.body.append(blockMessage);

  setTimeout(() => {
    blockMessage.style.visibility = 'hidden';
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
