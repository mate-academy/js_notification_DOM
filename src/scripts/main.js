'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const notification = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageText = document.createElement('p');

  notification.classList.add('notification', type);
  messageTitle.classList.add('title');
  messageTitle.textContent = title;
  messageText.textContent = description;

  notification.append(messageTitle);
  notification.append(messageText);
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  document.body.append(notification);

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
