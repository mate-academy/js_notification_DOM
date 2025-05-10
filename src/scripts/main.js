'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  let message = document.createElement('div');
  let messageTitle = document.createElement('h2');
  let messageDescr = document.createElement('p');
  messageTitle.innerHTML = title;
  messageDescr.innerHTML = description;
  message.classList.add('notification', type);
  messageTitle.className = 'title';
  document.body.querySelector('h1').after(message);
  message.prepend(messageTitle, messageDescr);
  message.style.position = 'absolute';
  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  setTimeout(() => {
    message.style.display = 'none';
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
