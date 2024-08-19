'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  div.className = `notification ${type}`;

  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;

  h2.className = 'title';
  h2.innerText = title;

  p.innerText = description;
  setTimeout(() => (div.style.display = 'none'), 2000);

  div.append(h2);
  div.append(p);
  document.body.append(div);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
