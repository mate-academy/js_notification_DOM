'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');
  const blockTitle = document.createElement('h2');
  const message = document.createElement('p');

  block.classList.add('notification');
  block.classList.add(`${type}`);
  blockTitle.classList.add('title');
  blockTitle.innerText = title;
  message.innerText = description;
  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;
  block.append(blockTitle);
  block.append(message);
  document.querySelector('body').append(block);

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
