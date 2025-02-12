'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  setTimeout(() => {
    const body = document.querySelector('body');

    const message = document.createElement('div');
    const messageTitle = document.createElement('h2');
    const messageDescription = document.createElement('p');

    message.classList.add('notification', type);
    messageTitle.classList.add('title');
    messageTitle.textContent = title;
    messageDescription.textContent = description;

    message.append(messageTitle, messageDescription);

    message.style.top = posTop + 'px';
    message.style.right = posRight + 'px';

    body.append(message);
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
