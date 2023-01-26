'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const body = document.querySelector('body');
  const h1 = document.querySelector('h1');

  notification.classList.add('notification', type);

  notification.insertAdjacentHTML('afterbegin',
    `
    <h2 class='title'>${title}</h2>
    <p>${description}</p>
    `
  );

  body.insertBefore(notification, h1.nextSibling);

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;
  notification.style.boxSizing = 'content-box';

  setTimeout(() => notification.remove(), 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
