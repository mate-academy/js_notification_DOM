'use strict';

const element = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');

  block.className = `notification ${type}`;
  element.append(block);

  block.style.top = posTop + 'px';

  const h3 = document.createElement('h3');

  h3.className = 'title';
  h3.textContent = title;
  block.append(h3);

  const p = document.createElement('p');

  p.textContent = description;
  block.append(p);

  setTimeout(() => block.remove(), 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  164,
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
