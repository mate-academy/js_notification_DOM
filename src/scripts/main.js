'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const block = document.createElement('div');
  const header = document.createElement('h2');
  const text = document.createElement('p');

  text.innerText = description;
  header.innerText = title;
  block.classList.add('notification', type);
  header.classList.add('title');
  block.append(header, text);
  body.append(block);

  header.style.fontSize = '18px';
  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;

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
