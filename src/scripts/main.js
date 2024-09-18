'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');

  div.classList.add('notification', type);

  const h2 = document.createElement('h2');

  h2.textContent = title;
  div.appendChild(h2);

  const p = document.createElement('p');

  p.textContent = description;
  div.appendChild(p);

  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;
  div.style.width = '330px';

  document.body.appendChild(div);

  setTimeout(() => {
    div.remove();
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
