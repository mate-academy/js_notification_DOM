'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const message = document.createElement('div');

  message.classList = `notification ${type}`;
  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';

  const messageTitle = document.createElement('h2');

  messageTitle.className = 'title';
  messageTitle.textContent = title;

  const messageDescription = document.createElement('p');

  messageDescription.textContent = description;

  message.append(messageTitle, messageDescription);
  body.append(message);

  setTimeout(() => {
    message.style.visibility = 'hidden';
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success'
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error'
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning'
);
