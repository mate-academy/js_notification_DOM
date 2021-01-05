'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  div.append(h2, p);

  div.setAttribute('class', `notification ${type}`);
  h2.setAttribute('class', 'title');
  h2.innerHTML = `${title}`;
  p.innerHTML = `${description}`;

  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;

  document.body.append(div);

  setTimeout(() => div.remove(), 2000);
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
