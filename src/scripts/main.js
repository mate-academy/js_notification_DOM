'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.querySelector('body');

  const message = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  message.classList.add('notification', type);
  h2.classList.add('title');

  h2.innerText = title;
  p.innerText = description;

  block.children[0].after(message);
  message.append(h2, p);

  setTimeout(() => message.remove(), 2000);
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
