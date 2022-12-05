'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const body = document.body;
  const block = document.createElement('div');
  const blockTitle = document.createElement('h2');
  const message = document.createElement('p');

  block.classList.add('notification', type);
  blockTitle.className = 'title';
  blockTitle.textContent = title;
  message.innerText = description;

  block.style.width = 'max-content';
  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;

  block.append(blockTitle, message);
  body.append(block);

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
