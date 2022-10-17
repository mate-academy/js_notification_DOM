'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.querySelector('body');

  const message = document.createElement('div');

  message.style.top = `${posTop}px`;

  message.style.right = `${posRight}px`;

  message.classList.add('notification', type);

  const h2 = document.createElement('h2');

  h2.classList.add('title');

  h2.innerText = title;

  const p = document.createElement('p');

  p.innerText = description;

  block.children[0].after(message);

  message.append(h2, p);

  setTimeout(message.remove(h2, p), 2000);
  // setTimeout(message.setAttribute('hidden', true), 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(180, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(320, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
