'use strict';

const htmlBody = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationDescription = document.createElement('p');

  notification.className = `notification ${type}`;
  notification.style.cssText = `top: ${posTop}px; right: ${posRight}px`;

  notificationTitle.className = 'title';
  notificationTitle.innerText = title;
  // seems like something wrong with font-size, so I decided to fix it a bit.
  notificationTitle.style.fontSize = '18px';

  notificationDescription.innerText = description;

  notification.append(notificationTitle, notificationDescription);

  htmlBody.append(notification);

  setTimeout(() => {
    notification.remove();
  }, 1950);
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
