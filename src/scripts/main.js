'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const block = document.createElement('div');

  block.classList.add('notification', type);

  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;
  block.style.boxSizing = 'content-box';
  body.append(block);

  const h2 = document.createElement('h2');

  h2.className = 'title';
  h2.innerText = title;

  block.append(h2);

  const p = document.createElement('p');

  p.innerText = description;

  block.append(p);

  setTimeout(() => block.remove(), 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
