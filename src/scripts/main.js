'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');

  document.body.appendChild(element);
  element.classList.add('notification', type);

  const h2 = document.createElement('h2');

  h2.classList.add('title');
  h2.textContent = title;
  element.appendChild(h2);

  const p = document.createElement('p');

  p.textContent = description;
  element.appendChild(p);

  element.style.top = posTop + 'px';
  element.style.right = posRight + 'px';

  setTimeout(() => {
    element.style.display = 'none';
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
