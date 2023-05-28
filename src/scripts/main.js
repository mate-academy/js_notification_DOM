'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');

  const notification = document.createElement('div');

  notification.className = `notification ${type}`;

  notification.style.marginTop = `${posTop}px`;
  notification.style.marginRight = `${posRight}px`;

  const head = document.createElement('h2');

  head.className = 'title';

  head.textContent = title;

  const message = document.createElement('p');

  message.textContent = description;

  notification.append(head);

  notification.append(message);

  body.append(notification);

  setTimeout(() => {
    document.body.removeChild(notification);
  }, 2000
  );
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
