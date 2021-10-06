'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const div = document.createElement('div');

  div.classList.add('notification', type);
  body.append(div);

  const h2 = document.createElement('h2');

  h2.className = 'title';
  h2.innerText = title;
  div.prepend(h2);

  const p = document.createElement('p');

  p.innerText = description;
  div.append(p);

  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;

  setTimeout(() => {
    div.remove();
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(180, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(320, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
