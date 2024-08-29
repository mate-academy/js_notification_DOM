'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const message = document.createElement('div');
  const body = document.querySelector('body');

  message.classList.add('notification', type);
  message.style.position = 'absolut';
  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;
  h2.textContent = title;
  p.textContent = description;
  message.append(h2);
  message.append(p);
  body.append(message);

  setTimeout(() => {
    message.remove();
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
