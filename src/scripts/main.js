'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const tit = document.createElement('h2');
  const desc = document.createElement('p');

  notification.classList.add(type, 'notification');
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  tit.innerText = title;
  tit.classList.add('title');
  desc.innerText = description;

  notification.append(tit);
  notification.append(desc);
  document.body.prepend(notification);

  setTimeout(() => notification.remove(), 2000);
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
