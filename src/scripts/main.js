'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const body = document.querySelector('body');

  notification.classList.add('notification', `${type}`);

  const headOfNotification = document.createElement('h2');
  const textOfNotification = document.createElement('p');

  headOfNotification.innerText = title;
  textOfNotification.innerText = description;

  notification.append(headOfNotification, textOfNotification);

  notification.style.boxSizing = 'content-box';
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  body.append(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
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
