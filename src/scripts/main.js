'use strict';

const body = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  let classList = '';

  switch (type) {
    case 'success':
      classList = 'notification success';
      break;

    case 'error':
      classList = 'notification error';
      break;

    case 'warning':
      classList = 'notification warning';
      break;

    default:
      break;
  }

  const notification = document.createElement('div');
  const tagTitle = document.createElement('h2');
  const tagDescription = document.createElement('p');

  tagTitle.textContent = title;
  tagTitle.classList = 'title';
  tagDescription.textContent = description;

  notification.classList = classList;
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  notification.appendChild(tagTitle);
  notification.appendChild(tagDescription);
  body.appendChild(notification);

  setTimeout(() => {
    notification.style.display = 'none';
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
