'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');
  div.classList =`notification ${type}`;

  const h2 = document.createElement('h2');
  h2.classList.add('title');
  h2.textContent = title;

  const p = document.createElement('p');
  p.textContent = description;

  div.appendChild(h2);
  div.appendChild(p);

  div.style.position = 'absolute';
  div.style.top = `${posTop}px`
  div.style.right = `${posRight}px`

  document.body.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 2000 );
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
