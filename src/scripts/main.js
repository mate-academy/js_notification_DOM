'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');

  block.classList.add('notification');
  block.classList.add(type);

  block.style.top = posTop + 'px';
  block.style.right = posRight + 'px';

  const message = document.createElement('h2');

  message.classList.add('title');
  message.textContent = title;

  const paragraph = document.createElement('p');

  paragraph.textContent = description;

  block.appendChild(message);
  block.appendChild(paragraph);

  document.body.appendChild(block);

  if (type === 'error') {
    setTimeout(() => {
      document.body.removeChild(block);
    }, 2000);
  }
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
