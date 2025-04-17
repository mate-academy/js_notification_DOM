'use strict';

const pushNotification = (
  posTop,
  posRight,
  titleText,
  descriptionText,
  type,
) => {
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  const title = document.createElement('h2');

  title.className = 'title';
  title.textContent = titleText;

  const description = document.createElement('p');

  description.textContent = descriptionText;

  notification.appendChild(title);
  notification.appendChild(description);

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 2200);
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
