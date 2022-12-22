'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const block = document.createElement('div');

  block.classList.add(`notification`, type);
  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;

  const h2 = document.createElement('h2');

  h2.textContent = title;
  h2.classList.add('title');

  const message = document.createElement('p');

  setTimeout(() => {
    block.remove();
  }, 2000);

  message.textContent = description;

  block.append(h2);
  block.append(message);
  body.append(block);
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
