'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // Create notification container
  const notification = document.createElement('div');
  notification.classList.add('notification', type);
  notification.style.position = 'absolute';
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  // Create title element
  const titleEl = document.createElement('h2');
  titleEl.classList.add('title');
  titleEl.textContent = title;

  // Create description element
  const descEl = document.createElement('p');
  descEl.textContent = description;

  // Append title and description to notification
  notification.appendChild(titleEl);
  notification.appendChild(descEl);

  // Append notification to body
  document.body.appendChild(notification);

  // Hide the notification after 2 seconds
  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\nNotification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\nNotification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\nNotification should contain title and description.',
  'warning',
);
