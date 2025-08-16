'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageBlock = document.createElement('div');

  messageBlock.classList.add('notification');
  messageBlock.classList.add(type);

  const header = document.createElement('h2');

  header.classList.add('title');
  header.textContent = title;

  const paragrath = document.createElement('p');

  paragrath.textContent = description;

  messageBlock.append(header, paragrath);

  messageBlock.style.position = 'fixed';
  messageBlock.style.top = posTop + 'px';
  messageBlock.style.right = posRight + 'px';

  document.body.append(messageBlock);

  setTimeout(() => {
    messageBlock.remove();
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
