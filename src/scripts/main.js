'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notif = document.createElement('div');
  const head = document.createElement('h2');
  const content = document.createElement('p');

  notif.style.top = `${posTop}px`;
  notif.style.right = `${posRight}px`;

  notif.classList.add('notification');
  notif.classList.add(type);

  head.textContent = title;
  head.classList.add('title');
  content.textContent = description;

  notif.append(head);
  notif.append(content);
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
