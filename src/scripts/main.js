'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const body = document.querySelector('body');
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  // div.style.cssText = `top: ${posTop}px; rigth: ${posRight}px`;
  div.classList.add('notification', type);
  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;

  h2.classList.add('title');
  h2.textContent = title;

  div.append(h2);

  p.textContent = description;

  div.append(p);

  body.children[1].before(div);

  setTimeout(() => {
    div.remove();
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
