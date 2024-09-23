'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);
  notification.innerHTML = `<h2 class='title'>${title}</h2><p>${description}</p>`;

  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
};

setTimeout(() => {
  pushNotification(
    10,
    10,
    'Title of Success message',
    'Message example.\n ' +
      'Notification should contain title and description.',
    'success',
  );
}, 500);

setTimeout(() => {
  pushNotification(
    150,
    10,
    'Title of Error message',
    'Message example.\n ' +
      'Notification should contain title and description.',
    'error',
  );
}, 1000);

setTimeout(() => {
  pushNotification(
    290,
    10,
    'Title of Warning message',
    'Message example.\n ' +
      'Notification should contain title and description.',
    'warning',
  );
}, 1500);
