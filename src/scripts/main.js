'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const notificationDiv = document.createElement('div');
  const titleNotification = document.createElement('h2');
  const descNotification = document.createElement('p');

  notificationDiv.className = `notification ${type}`;
  titleNotification.className = 'title';
  titleNotification.style.whiteSpace = 'nowrap';

  titleNotification.innerHTML = title;
  descNotification.innerHTML = description;
  descNotification.style.whiteSpace = 'pre-line';

  notificationDiv.style.top = posTop + 'px';
  notificationDiv.style.right = posRight + 'px';

  notificationDiv.appendChild(titleNotification);
  notificationDiv.appendChild(descNotification);
  body.appendChild(notificationDiv);

  setTimeout(() => {
    notificationDiv.remove();
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
