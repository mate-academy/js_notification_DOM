'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');
  const titleBlock = document.createElement('h2');
  const messageBlock = document.createElement('p');

  block.classList.add('notification', type);

  titleBlock.className = 'title';
  titleBlock.innerText = `${title}`;

  messageBlock.innerText = description;

  block.append(titleBlock);
  block.append(messageBlock);

  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;

  const parentElement = document.querySelector('body');

  parentElement.append(block);

  setTimeout(() => {
    block.remove();
  }, 2000);
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
