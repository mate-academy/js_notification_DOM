'use strict';

const HIDE_DELAY = 2000;

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const titleItem = document.createElement('h2');
  const descriptionItem = document.createElement('p');

  notification.classList.add('notification', type);
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  titleItem.textContent = title;
  titleItem.classList.add('title');

  descriptionItem.innerText = description;

  notification.append(titleItem, descriptionItem);
  document.body.append(notification);

  setTimeout(() => {
    notification.style.display = 'none';
  }, HIDE_DELAY);
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
