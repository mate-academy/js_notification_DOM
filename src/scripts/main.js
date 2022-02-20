'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationBlock = document.createElement('div');

  notificationBlock.className = `notification ${type}`;

  const notificationTitle = document.createElement('h2');

  notificationTitle.className = `title`;

  const notificationDescription = document.createElement('p');

  notificationDescription.className = `description`;

  notificationTitle.textContent = title;
  notificationDescription.textContent = description;

  notificationBlock.style.top = posTop;
  notificationBlock.style.right = posRight;

  const pageBody = document.querySelector('body');

  pageBody.append(notificationBlock);

  notificationBlock.append(notificationTitle, notificationDescription);

  /* setTimeout(() => {
    notificationBlock.style.display = 'none';
  },
  2000); */
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
