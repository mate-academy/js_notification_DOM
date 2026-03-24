'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const k = document.createElement('div');
  k.style.top = `${posTop}px`;
  k.style.right = `${posRight}px`
  k.classList.add('notification', type);

  const h2 = document.createElement('h2');
  h2.classList.add('title');
  h2.textContent = title;

  const p = document.createElement('p');
  p.textContent = description;

  k.append(h2);
  k.append(p);
  document.body.append(k);

  setTimeout(() => {
    k.style.display = 'none';
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
