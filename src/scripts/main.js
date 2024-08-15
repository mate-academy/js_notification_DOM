'use strict';

let previousNotificationBottom = 10;

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.body;
  const message = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageDescr = document.createElement('p');

  message.classList.add('notification');
  messageTitle.classList.add('title');

  if (type === 'success') {
    message.classList.add('success');
  } else if (type === 'error') {
    message.classList.add('error');
  } else if (type === 'warning') {
    message.classList.add('warning');
  }

  messageTitle.textContent = title;
  messageDescr.textContent = description;

  message.style.position = 'absolute';
  message.style.top = `${previousNotificationBottom}px`;
  message.style.right = `${posRight}px`;

  message.appendChild(messageTitle);
  message.appendChild(messageDescr);
  body.appendChild(message);

  previousNotificationBottom += message.offsetHeight + 10;

  setTimeout(() => {
    message.remove();
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
