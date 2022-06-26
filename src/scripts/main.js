'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here

  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const body = document.querySelector('body');

  h2.textContent = title;
  h2.className = 'title';
  p.textContent = description;

  div.className = 'notification';
  div.classList.add(type);
  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;
  div.style.boxSizing = 'content-box';

  div.append(h2);
  div.append(p);
  body.append(div);

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
