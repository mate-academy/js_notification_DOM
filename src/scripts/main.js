'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const heading = document.createElement('h3');

  heading.classList.add('title');

  const paragraph = document.createElement('p');

  paragraph.textContent = description;
  heading.textContent = title;

  notification.appendChild(heading);
  notification.appendChild(paragraph);
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';
  notification.classList.add('notification');
  notification.classList.add(type);

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
