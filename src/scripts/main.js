'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const mainElement = document.querySelector('body');
  const block = document.createElement('div');

  block.classList.add('notification');
  block.classList.add(`${type}`);
  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;
  mainElement.append(block);

  const h2 = document.createElement('h2');

  h2.classList.add('title');
  h2.innerText = title;
  h2.style.whiteSpace = 'nowrap';
  block.append(h2);

  const p = document.createElement('p');

  p.innerText = description;
  block.append(p);
};

setTimeout(() => {
  pushNotification(10, 10, 'Title of Success message',
    'Message example.\n '
  + 'Notification should contain title and description.', 'success');
}, 2000);

setTimeout(() => {
  pushNotification(150, 10, 'Title of Error message',
    'Message example.\n '
  + 'Notification should contain title and description.', 'error');
}, 2000);

setTimeout(() => {
  pushNotification(290, 10, 'Title of Warning message',
    'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
}, 2000);
