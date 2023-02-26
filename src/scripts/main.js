'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const block = document.createElement('div');
  const caption = document.createElement('h2');
  const message = document.createElement('p');

  block.className = 'notification';
  block.classList.add(type);
  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;
  block.style.width = `${350}px`;
  caption.textContent = title;
  message.textContent = description;
  block.append(caption, message);
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
