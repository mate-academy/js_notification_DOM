'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  h2.textContent = title;
  p.textContent = description;

  message.className = `notification ${type}`;
  h2.className = 'title';
  p.className = 'description';

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  message.append(h2, p);
  document.body.append(message);

  setTimeout(() => (message.style.visibility = 'hidden'), 2000);
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
