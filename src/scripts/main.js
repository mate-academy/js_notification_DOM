'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.className = 'notification';

  if (notification) {
    notification.classList.add(type);
  };

  document.querySelector('body').append(notification);

  const messageTitle = document.createElement('h2');

  messageTitle.textContent = title;
  notification.append(messageTitle);

  const messageDescription = document.createElement('p');

  messageDescription.textContent = description;
  notification.append(messageDescription);

  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  setTimeout(() => notification.remove(), 3000);
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
