'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.className = 'notification';
  notification.classList.add(type);

  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  const heading = document.createElement('h2');

  heading.className = 'title';
  heading.textContent = title;

  const paragraph = document.createElement('p');

  paragraph.textContent = description;

  notification.append(heading);
  notification.append(paragraph);
  document.body.append(notification);

  setTimeout(() => notification.remove(), 2000);
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
