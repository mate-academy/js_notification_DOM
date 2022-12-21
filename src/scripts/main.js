'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationBox = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationDescription = document.createElement('p');

  notificationTitle.textContent = title;
  notificationDescription.textContent = description;
  notificationBox.className = 'notification';
  notificationBox.classList.add(`${type}`);
  notificationBox.appendChild(notificationTitle);
  notificationBox.appendChild(notificationDescription);
  notificationBox.style.top = `${posTop}px`;
  notificationBox.style.right = `${posRight}px`;

  document.body.appendChild(notificationBox);

  setTimeout(() => {
    notificationBox.remove();
  }, 2000);
};

pushNotification(10, 10, 'Title of Success notification',
  'notification example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(170, 10, 'Title of Error notification',
  'notification example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(330, 10, 'Title of Warning notification',
  'notification example.\n '
  + 'Notification should contain title and description.', 'warning');
