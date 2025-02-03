'use strict';

const notifBlock = document.createElement('div');

notifBlock.setAttribute('class', 'notification-block');
notifBlock.style.top = '10px';
notifBlock.style.right = '10px';
notifBlock.style.position = 'fixed';
notifBlock.style.display = 'flex';
notifBlock.style.flexDirection = 'column';
notifBlock.style.gap = '10px';
notifBlock.style.opacity = '1';
notifBlock.style.transition = 'opacity 1s ease-out';

document.body.appendChild(notifBlock);

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  const notificationTitle = document.createElement('h2');
  const notificationDescrip = document.createElement('p');

  notification.setAttribute('class', 'notification');
  notification.classList.add(type);

  notification.style.position = 'static';

  notificationTitle.setAttribute('class', 'title');
  notificationTitle.textContent = title;
  notificationDescrip.setAttribute('class', 'description');
  notificationDescrip.textContent = description;

  notification.appendChild(notificationTitle);
  notificationTitle.insertAdjacentElement('afterend', notificationDescrip);

  notifBlock.appendChild(notification);
};

setTimeout(() => {
  notifBlock.style.display = 'none';
}, 2000);

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
