'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const h2 = document.createElement('h2');
  const div = document.createElement('div');
  const p = document.createElement('p');

  h2.classList.add('title');
  div.classList.add('notification', type);

  h2.textContent = title;
  p.textContent = description;

  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;

  div.append(h2, p);
  document.body.append(div);

  setTimeout(() => {
    div.style.display = 'none';
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
