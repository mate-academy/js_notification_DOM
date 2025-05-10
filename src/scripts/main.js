'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  document.body.appendChild(message);

  message.classList.add('notification', type);

  const messageTitle = document.createElement('h2');

  messageTitle.innerText = title;
  messageTitle.classList.add('title');

  const messageDesc = document.createElement('p');

  messageDesc.innerText = description;

  // add text to message
  message.appendChild(messageTitle);
  message.appendChild(messageDesc);

  // position message
  message.style.cssText = `top: ${posTop}px; right: ${posRight}px;`;

  // apply color
  // TODO: in case if i'll be rejected, add this.

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
