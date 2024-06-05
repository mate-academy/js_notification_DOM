'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  message.className = `notification ${type}`;
  message.style.position = 'fixed';
  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  const h2 = document.createElement('h2');

  h2.className = 'title';
  h2.textContent = title;

  const p = document.createElement('p');

  const correctDescription = description.replace(/\n/g, '<br>');

  p.innerHTML = correctDescription;

  message.appendChild(h2);
  message.appendChild(p);

  document.body.appendChild(message);

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
