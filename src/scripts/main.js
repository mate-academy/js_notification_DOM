'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.body;
  const notification = document.createElement('div');
  const titleOfNotification = document.createElement('h2');
  const descrOfNotification = document.createElement('p');

  notification.classList.add('notification');
  notification.classList.add(`${type}`);
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  titleOfNotification.classList.add('title');
  titleOfNotification.append(title);
  notification.append(titleOfNotification);
  descrOfNotification.append(description);
  notification.append(descrOfNotification);

  body.append(notification);

  setTimeout(() => notification.remove(), 2000);
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
