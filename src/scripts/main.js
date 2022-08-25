'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const notification = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const message = document.createElement('p');

  notification.classList.add('notification');
  notification.classList.add(type);
  messageTitle.className = 'title';
  messageTitle.innerText = title;
  message.innerText = description;

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;
  notification.append(messageTitle);
  notification.append(message);

  document.body.append(notification);

  setTimeout(() => {
    notification.hidden = true;
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
