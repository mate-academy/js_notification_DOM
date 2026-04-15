'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('article');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  div.classList.add('notification', type);

  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;
  p.style.whiteSpace = 'pre-line';
  p.textContent = description;
  h2.classList.add('title');
  h2.textContent = title;

  div.append(h2, p);
  document.body.append(div);

  setTimeout(() => {
    div.style.visibility = 'hidden';
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
