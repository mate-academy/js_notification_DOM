'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');

  block.style.position = 'absolute';
  block.className = `notification ${type}`;
  block.style.top = posTop + 'px';
  block.style.right = posRight + 'px';

  const text = document.createElement('h2');

  text.className = 'title';
  text.textContent = title;

  const p = document.createElement('p');

  p.textContent = description;

  block.appendChild(text);
  block.appendChild(p);
  document.body.appendChild(block);

  setTimeout(() => {
    block.style.display = 'none';
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
