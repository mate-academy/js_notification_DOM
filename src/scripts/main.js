'use strict';

const body = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const header = document.createElement('h2');
  const paragraph = document.createElement('p');

  body.append(notification);
  notification.classList.value = `notification ${type}`;
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';
  notification.append(header);
  notification.append(paragraph);

  header.textContent = title;
  header.classList.add('title');
  header.style.fontSize = '18px';

  paragraph.textContent = description;

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
