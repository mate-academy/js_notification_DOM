'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const notification = document.createElement('div');
  const heading = document.createElement('h2');
  const blockDescription = document.createElement('p');

  heading.textContent = title;
  heading.classList.add('title');
  blockDescription.textContent = description;
  notification.append(heading);
  notification.append(blockDescription);
  notification.classList.add('notification', type);

  notification.style.top = String(posTop) + 'px';
  notification.style.right = String(posRight) + 'px';

  document.body.append(notification);

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
