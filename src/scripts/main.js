'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  body.append(div);
  div.append(h2, p);

  h2.textContent = title;
  p.textContent = description;

  div.classList.add('notification', type);
  h2.classList.add('title');

  div.style.position = 'absolute';
  div.style.top = posTop + 'px';
  div.style.right = posRight + 'px';

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
