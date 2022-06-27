'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const bodyElement = document.querySelector('body');
  const block = document.createElement('div');

  block.className = `notification ${type}`;

  block.insertAdjacentHTML('beforeend', `
   <h2 class = 'title'>${title}</h2>
   <p>${description}</p>
  `);

  bodyElement.append(block);
  block.style.top = posTop + 'px';
  block.style.right = posRight + 'px';

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
