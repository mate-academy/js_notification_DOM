'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const notification = document.createElement('div');

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  if (type === 'success' || type === 'error' || type === 'warning') {
    notification.classList.add('notification', type);
  } else {
    return 'Invalid notification type. Use "success", "error", or "warning".';
  }

  const h2Title = document.createElement('h2');

  h2Title.textContent = title;
  h2Title.classList.add('title');
  notification.prepend(h2Title);

  const pDescription = document.createElement('p');

  pDescription.textContent = description;
  notification.append(pDescription);

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
