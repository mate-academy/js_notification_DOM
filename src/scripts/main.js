'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageContainer = document.createElement('div');

  messageContainer.className = 'notification';
  messageContainer.classList.add(type);

  messageContainer.style.top = posTop + 'px';
  messageContainer.style.right = posRight + 'px';

  const messageTitle = document.createElement('h2');

  messageTitle.className = 'title';
  messageTitle.textContent = title;

  messageContainer.append(messageTitle);

  const messageText = document.createElement('p');

  messageText.textContent = description;
  messageContainer.append(messageText);
  document.body.append(messageContainer);

  setTimeout(() => (messageContainer.style.visibility = 'hidden'), 2000);
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
