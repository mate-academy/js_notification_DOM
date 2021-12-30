'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const notification = document.createElement('div');

  notification.className = 'notification';
  notification.classList.toggle(type);
  body.append(notification);

  const h2 = document.createElement('h2');

  h2.textContent = title;
  h2.className = 'title';

  notification.prepend(h2);

  const paragraph = document.createElement('p');

  paragraph.textContent = description;
  notification.append(paragraph);

  notification.style.position = 'absolute';
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  setTimeout(() =>
    notification.remove(), 2000);
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
