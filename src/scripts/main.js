'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notifys = document.querySelector('.notifications');
  const notify = document.createElement('div');

  notify.innerHTML = `
    <h2 class="title">${title}</h2>
    <p class="text">${description}</p>
  `;

  notifys.append(notify);

  notify.className = `notification ${type}`;
  notify.style.top = `${posTop}px`;
  notify.style.right = `${posRight}px`;

  setTimeout(() => {
    notify.style.display = 'none';
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
