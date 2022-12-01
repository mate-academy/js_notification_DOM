'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here

  const body = document.querySelector('body');
  const div = document.createElement('div');
  const p = document.createElement('p');
  const h2 = document.createElement('h2');

  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;

  div.classList.add(`notification`, type);
  h2.classList.add('title');

  p.innerText = description;
  h2.innerText = title;

  div.append(h2);
  div.append(p);
  body.append(div);

  setTimeout(() => div.remove(), 5000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(190, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(340, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
