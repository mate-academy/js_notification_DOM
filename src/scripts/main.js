'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  if (['success', 'warning', 'error'].includes(type)) {
    message.className = `notification ${type}`;
  } else {
    message.className = 'notification';
  }

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  const messageTitle = document.createElement('h2');

  messageTitle.className = 'title';
  messageTitle.innerHTML = title;
  message.appendChild(messageTitle);

  const messageDescription = document.createElement('p');

  messageDescription.innerHTML = description;
  message.appendChild(messageDescription);

  document.body.append(message);

  setTimeout(() => (message.style.display = 'none'), 2000);
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
