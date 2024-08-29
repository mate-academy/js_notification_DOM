'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('message');
  const titleElement = document.createElement('h2');
  const p = document.createElement('p');

  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';

  titleElement.textContent = title;
  p.textContent = description;

  message.append(titleElement);
  message.append(p);

  titleElement.setAttribute('class', 'title');
  message.setAttribute('class', 'notification ' + type);
  document.querySelector('body').append(message);

  setTimeout(() => {
    message.style.visibility = 'hidden';
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
