'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;

  const notificationTitle = document.createElement('h2');

  notificationTitle.className = 'title';
  notificationTitle.style.whiteSpace = 'nowrap';
  notificationTitle.textContent = title;

  const notificationDescription = document.createElement('p');

  const formattedDescription = description.replace(/\n/g, '<br>');

  notificationDescription.innerHTML = formattedDescription;

  document.querySelector('body').append(notification);
  notification.append(notificationTitle);
  notification.append(notificationDescription);

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

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
