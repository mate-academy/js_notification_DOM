'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const h2 = document.createElement('h2');
  const block = document.createElement('div');
  const paragraph = document.createElement('p');

  block.className = `notification ${type}`;
  h2.textContent = title;
  h2.className = 'title';
  paragraph.textContent = description;
  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;
  block.append(h2, paragraph);

  setTimeout(() => {
    body.append(block);
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
