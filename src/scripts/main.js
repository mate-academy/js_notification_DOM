'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const heading = document.createElement('h2');
  const message = document.createElement('p');

  heading.innerText = title;
  message.innerText = description;

  heading.style.fontSize = '1.3em';

  notification.append(heading);
  notification.append(message);

  notification.style.right = `${posRight}px`;
  notification.style.top = `${posTop}px`;

  notification.classList.toggle('notification');
  notification.classList.toggle(type);

  document.body.append(notification);

  setTimeout(() => document.body.removeChild(notification), 2000);
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
