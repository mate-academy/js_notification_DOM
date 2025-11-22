'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const node = document.createElement('div');

  node.classList.add('notification', type);

  const h = document.createElement('h2');

  h.className = 'title';
  h.textContent = title;
  node.appendChild(h);

  const p = document.createElement('p');

  p.className = 'description';
  p.textContent = description;
  node.appendChild(p);

  node.style.top = `${posTop}px`;
  node.style.right = `${posRight}px`;
  document.body.appendChild(node);

  setTimeout(() => {
    node.style.display = 'none';
  }, 2000);
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
