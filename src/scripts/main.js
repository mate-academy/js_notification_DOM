'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notifMessage = document.createElement('div');
  const notifTitle = document.createElement('h2');
  const notifDescription = document.createElement('p');

  notifMessage.classList.add('notification', type);
  notifTitle.classList.add('title');
  notifTitle.textContent = title;
  notifDescription.textContent = description;
  notifMessage.append(notifTitle, notifDescription);
  notifMessage.style.top = `${posTop}px`;
  notifMessage.style.right = `${posRight}px`;
  document.body.appendChild(notifMessage);

  setTimeout(() => {
    notifMessage.style.visibility = 'hidden';
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
