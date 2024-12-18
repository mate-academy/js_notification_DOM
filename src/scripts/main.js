'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageWindow = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageText = document.createElement('p');

  messageTitle.textContent = title;
  messageTitle.classList.add('title');
  messageText.textContent = description;

  messageWindow.classList.add('notification');
  messageWindow.style.top = posTop + 'px';
  messageWindow.style.right = posRight + 'px';

  if (type === 'success') {
    messageWindow.classList.add('success');
  }

  if (type === 'warning') {
    messageWindow.classList.add('warning');
  }

  if (type === 'error') {
    messageWindow.classList.add('error');
  }

  messageWindow.append(messageTitle);
  messageWindow.append(messageText);
  document.body.append(messageWindow);

  setTimeout(() => {
    messageWindow.style.display = 'none';
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
