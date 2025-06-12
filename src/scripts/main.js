'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.body;

  const messageContainer = document.createElement('div');

  messageContainer.style = `top: ${posTop}px; right: ${posRight}px;`;
  messageContainer.classList.add('notification', type);

  const titleEl = document.createElement('h2');

  titleEl.classList.add('title');
  titleEl.innerText = title;

  const descriptionEl = document.createElement('p');

  descriptionEl.innerText = description;

  messageContainer.append(titleEl, descriptionEl);
  body.append(messageContainer);

  setTimeout(() => {
    messageContainer.style = 'display: none;';
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
