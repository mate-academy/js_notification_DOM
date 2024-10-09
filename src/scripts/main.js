'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const message = document.createElement('div');

  const messageContent = {
    title,
    description,
  };

  for (const key in messageContent) {
    const el = document.createElement(key === 'title' ? 'h2' : 'p');

    el.textContent = messageContent[key];
    el.className = key;
    message.append(el);
  }

  message.className = `notification ${type}`;
  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';
  body.append(message);

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
