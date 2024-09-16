'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  message.classList.add('notification', type);
  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';

  const messageTitle = document.createElement('h2');

  messageTitle.className = 'title';
  messageTitle.innerHTML = title;
  messageTitle.style.fontSize = '18px';
  message.append(messageTitle);

  const messageDescription = document.createElement('p');

  messageDescription.innerHTML = description.replace('\n', '</br>');
  message.append(messageDescription);

  document.body.append(message);

  setTimeout(() => message.remove(), 2000);
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
