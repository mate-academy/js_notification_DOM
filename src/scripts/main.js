'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);
  notification.style.position = 'fixed';
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  const h2 = document.createElement('h2');

  h2.classList.add('title');
  h2.textContent = title;

  const p = document.createElement('p');

  p.classList.add('description');
  p.textContent = description;

  notification.append(h2, p);
  document.body.append(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
};

// Виклики
pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example. Notification should contain title and description.',
  'success',
);

pushNotification(
  163,
  10,
  'Title of Error message',
  'Message example. Notification should contain title and description.',
  'error',
);

pushNotification(
  287,
  10,
  'Title of Warning message',
  'Message example. Notification should contain title and description.',
  'warning',
);
