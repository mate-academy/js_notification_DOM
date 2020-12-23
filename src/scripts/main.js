'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const newBlock = document.createElement('div');
  const newTitle = document.createElement('h2');
  const newDescription = document.createElement('p');

  newBlock.classList.add('notification', type);
  newBlock.textContent = description;

  newTitle.classList.add('title');
  newTitle.textContent = title;

  newBlock.append(newTitle, newDescription);
  document.body.append(newBlock);

  newBlock.style.top = `${posTop}px`;
  newBlock.style.right = `${posRight}px`;

  setTimeout(() => newBlock.remove(), 2000);
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
