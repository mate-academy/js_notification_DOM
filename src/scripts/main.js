'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');
  const blockH2 = document.createElement('h2');
  const blockP = document.createElement('p');

  blockH2.append(title);
  blockP.append(description);
  block.append(blockH2, blockP);
  document.body.append(block);

  block.style.cssText = `top: ${posTop}px; right: ${posRight}px;`;

  block.classList.add('notification');
  block.classList.add(type);
  blockH2.classList.add('title');

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
