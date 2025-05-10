'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  const notificationTitle = document.createElement('h2');

  notificationTitle.classList.add('title');
  notificationTitle.textContent = title;

  const notificationMessage = document.createElement('p');

  notificationMessage.textContent = description;

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  notification.appendChild(notificationTitle);
  notification.appendChild(notificationMessage);
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
};

pushNotification(
  10,
  10,
  'Success!',
  'The operation was successful.',
  'success',
);
pushNotification(150, 10, 'Error!', 'Something went wrong.', 'error');
pushNotification(290, 10, 'Warning!', 'Please be cautious.', 'warning');
