'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('section');
  const notificationTitle = document.createElement('h2');
  const notificationDescription = document.createElement('p');

  notification.classList.add('notification', type);
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  notificationTitle.innerText = title;
  notificationTitle.classList.add('title');

  notificationDescription.innerText = description;

  notification.append(notificationTitle);
  notification.append(notificationDescription);
  document.querySelector('body').append(notification);

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
