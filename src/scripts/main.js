'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notif = document.createElement('div');

  notif.classList.add('notification');

  const typeClassMap = {
    success: 'success',
    error: 'error',
    warning: 'warning',
  };

  if (typeClassMap[type]) {
    notif.classList.add(typeClassMap[type]);
  }
  notif.style.position = 'absolute';

  notif.style.cssText = `
    top: ${posTop}px;
    right: ${posRight}px;
  `;

  const notifTitle = document.createElement('h2');

  notifTitle.classList.add('title');
  notifTitle.textContent = title;

  const notifDesc = document.createElement('p');

  notifDesc.classList.add('description');
  notifDesc.textContent = description;
  notifDesc.style.whiteSpace = 'pre-line';

  notif.append(notifTitle, notifDesc);
  document.body.append(notif);

  setTimeout(() => {
    notif.style.display = 'none';
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
