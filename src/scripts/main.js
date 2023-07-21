'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here

  const docBody = document.querySelector('body');

  const notificationBox = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationContect = document.createElement('p');

  notificationBox.style.top = posTop + 'px';
  notificationBox.style.right = posRight + 'px';

  notificationTitle.textContent = title;
  notificationTitle.classList.add('title');

  notificationContect.textContent = description;

  notificationBox.append(notificationTitle);
  notificationBox.append(notificationContect);
  notificationBox.classList.add('notification', type);

  docBody.append(notificationBox);

  setTimeout(() => {
    notificationBox.style.display = 'none';
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
