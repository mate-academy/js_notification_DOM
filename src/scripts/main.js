'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  const titleNotification = document.createElement('h2');

  titleNotification.classList.add('title');
  titleNotification.textContent = title;

  const descriptionNotif = document.createElement('p');

  descriptionNotif.textContent = description;

  notification.appendChild(titleNotification);
  notification.appendChild(descriptionNotif);

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
  // write code here
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
