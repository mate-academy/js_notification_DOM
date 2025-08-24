'use strict';

const pushNotification = (coordinates, title, description, type) => {
  const divFor = document.createElement('div');
  const { x, y } = coordinates;

  const allowed = new Set(['success', 'error', 'warning']);
  const kind = allowed.has(type) ? type : 'success';

  divFor.classList.add('notification', kind);

  divFor.setAttribute(
    'style',
    `position: fixed; display: block; left: ${x}px; top: ${y}px;`,
  );

  const h2 = document.createElement('h2');

  h2.className = 'title';
  h2.textContent = title;

  const p = document.createElement('p');

  p.textContent = description;

  divFor.append(h2, p);
  document.body.appendChild(divFor);

  setTimeout(() => {
    divFor.style.visibility = 'hidden';
  }, 2000);
};

pushNotification(
  { x: 10, y: 10 },
  'Title of Success message',
  'Message example. Notification should contain title and description.',
  'success',
);

pushNotification(
  { x: 10, y: 150 },
  'Title of Error message',
  'Message example. Notification should contain title and description.',
  'error',
);

pushNotification(
  { x: 10, y: 290 },
  'Title of Warning message',
  'Message example. Notification should contain title and description.',
  'warning',
);
// divFor.setAttribute(
//   'style',
//   `position: fixed; display: block; top: ${y}px; left: ${x}px;`,
// );
