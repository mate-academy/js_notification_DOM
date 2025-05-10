'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  const header = document.createElement('h2');

  header.innerText = title;
  header.classList.add('title');

  const messageBody = document.createElement('p');

  messageBody.innerText = description;

  message.appendChild(header);
  message.appendChild(messageBody);
  message.classList.add('notification', type);
  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;
  document.body.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, '2000');
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
