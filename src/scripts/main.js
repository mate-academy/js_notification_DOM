'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.setAttribute('class', `notification ${type}`);
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';
  document.body.appendChild(notification);

  const heading = document.createElement('h2');

  notification.appendChild(heading);
  heading.setAttribute('class', 'title');
  heading.textContent = title;

  const text = document.createElement('p');

  notification.appendChild(text);
  text.textContent = description;

  setTimeout(() => {
    notification.setAttribute('class', '');
    heading.textContent = '';
    text.textContent = '';
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
