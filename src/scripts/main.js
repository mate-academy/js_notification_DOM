'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const body = document.querySelector('body');
  const block = document.createElement('div');
  const hTwo = document.createElement('h2');
  const paragraph = document.createElement('p');

  hTwo.className = 'title';
  hTwo.innerHTML = `${title}`;
  paragraph.innerHTML = `${description}`;

  block.className = `notification ${type}`;
  block.append(hTwo);
  block.append(paragraph);
  body.append(block);

  block.style.top = posTop + 'px';
  block.style.right = posRight + 'px';

  // setTimeout(() => block.remove(), 2000);
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
