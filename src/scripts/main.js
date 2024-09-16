'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  block.className = `notification ${type}`;
  block.style.top = posTop + 'px';

  h2.className = 'title';
  h2.style.fontSize = '16px';

  h2.innerText = title;
  p.innerText = description;

  block.append(h2, p);

  const logo = document.querySelector('.logo');

  logo.after(block);

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
