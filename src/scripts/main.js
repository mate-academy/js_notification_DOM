'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', `${type}`);
  notification.style.boxSizing = 'unset';
  notification.style.right = `${posRight}px`;
  notification.style.top = `${posTop}px`;

  const notificationTitle = document.createElement('h2');
  const notificationDescription = document.createElement('p');

  notificationTitle.innerText = `${title}`;
  notificationDescription.innerText = `${description}`;

  notification.append(notificationTitle, notificationDescription);

  document.body.append(notification);

  const removeNotification = () => {
    notification.remove();
  };

  setTimeout(removeNotification, 2000);
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
