'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const root = document.body;
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  root.append(div);
  div.append(h2);
  div.append(p);
  div.className = `notification ${type}`;
  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;
  h2.className = `title`;
  h2.innerText = `${title}`;
  p.innerText = `${description}`;
  div.style.boxSizing = `content-box`;

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
