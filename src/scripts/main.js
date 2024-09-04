'use strict';

const root = document.getElementById('root');

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const message = document.createElement('div');

  message.className = 'notification';
  message.style.cssText = `top: ${posTop}px; right: ${posRight}px`;

  if (type === 'success') {
    message.classList.add('success');
  } else if (type === 'error') {
    message.classList.add('error');
  } else if (type === 'warning') {
    message.classList.add('warning');
  }

  const h2 = document.createElement('h2');

  h2.className = 'title';
  h2.textContent = title;

  const p = document.createElement('p');

  p.textContent = description;

  message.appendChild(h2);
  message.appendChild(p);

  root.appendChild(message);
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
