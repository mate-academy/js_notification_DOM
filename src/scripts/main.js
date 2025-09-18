'use strict';

const pushNotification = (coordinates, title, description, type) => {
  const { top: topPos, right: rightPos } = coordinates;

  const root = document.createElement('div');

  root.className = `notification ${type}`;

  root.style.top = `${topPos}px`;
  root.style.right = `${rightPos}px`;

  const h2 = document.createElement('h2');

  h2.className = 'title';
  h2.textContent = title;

  const p = document.createElement('p');

  p.textContent = description;

  root.append(h2, p);
  document.body.appendChild(root);

  setTimeout(() => {
    root.style.display = 'none';
  }, 2000);
};

window.pushNotification = pushNotification;

pushNotification(
  { top: 10, right: 10 },
  'Title of Success message',
  'Message example.\n Notification should contain title and description.',
  'success',
);

pushNotification(
  { top: 150, right: 10 },
  'Title of Error message',
  'Message example.\n Notification should contain title and description.',
  'error',
);

pushNotification(
  { top: 290, right: 10 },
  'Title of Warning message',
  'Message example.\n Notification should contain title and description.',
  'warning',
);
