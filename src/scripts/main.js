'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notif = document.createElement('div');

  notif.className = `notification ${type}`;
  notif.style.top = `${posTop}px`;
  notif.style.right = `${posRight}px`;

  notif.innerHTML = `
    <h2 class='title'>${title}</h2>
    <p>${description.replace(/\n/g, '<br>')}</p>
  `;

  document.body.appendChild(notif);

  setTimeout(() => {
    notif.style.display = `none`;
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
