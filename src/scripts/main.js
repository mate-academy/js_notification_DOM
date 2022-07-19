'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationDescription = document.createElement('p');

  notification.className = `notification ${type}`;
  notificationTitle.className = 'title';

  notificationTitle.textContent = `${title}`;
  notificationDescription.textContent = `${description}`;

  notification.append(notificationTitle, notificationDescription);
  document.querySelector('body').append(notification);

  notification.style.cssText = `top: ${posTop}px; right: ${posRight}px`;

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
