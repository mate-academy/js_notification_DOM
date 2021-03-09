'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const body = document.querySelector('body');
  const notification = document.createElement('div');
  const titleText = document.createElement('h2');
  const messageText = document.createElement('p');

  notification.classList.add('notification');
  notification.classList.add(type);
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  titleText.classList.add('title');
  titleText.textContent = `${title}`;

  messageText.textContent = `${description}`;

  body.append(notification);
  notification.append(titleText);
  notification.append(messageText);

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
