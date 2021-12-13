'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const body = document.querySelector('body');
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  div.classList.add('notification');
  div.classList.add(`${type}`);
  div.style.top = posTop + 'px';
  div.style.right = posRight + 'px';

  h2.classList.add('title');
  h2.textContent = `${title}`;

  p.textContent = `${description}`;

  body.append(div);
  div.append(h2);
  div.append(p);

  setTimeout(() => {
    div.style.visibility = 'hidden';
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
