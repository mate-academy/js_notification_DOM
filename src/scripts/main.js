'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const body = document.querySelector('body');

  const block = document.createElement('div');

  block.classList = `notification ${type}`;
  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;

  const titl = document.createElement('h2');

  titl.classList = 'title';
  titl.textContent = title;
  titl.style.whiteSpace = 'nowrap';
  block.append(titl);

  const desc = document.createElement('p');

  desc.innerHTML = description.replace(/\n/g, '<br>');
  block.append(desc);

  body.append(block);

  setTimeout(() => {
    block.style.display = 'none';
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
