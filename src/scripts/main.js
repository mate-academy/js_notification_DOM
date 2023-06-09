'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const notificationBody = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationText = document.createElement('p');

  notificationBody.classList.add('notification', type);
  notificationBody.style.top = `${posTop}px`;
  notificationBody.style.right = `${posRight}px`;

  notificationTitle.classList.add('title');
  notificationTitle.innerText = title;
  notificationBody.append(notificationTitle);

  notificationText.innerText = description;
  notificationBody.append(notificationText);

  body.prepend(notificationBody);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(180, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(320, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
