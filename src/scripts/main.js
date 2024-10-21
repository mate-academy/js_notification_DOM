'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.body;
  const container = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  container.className = `notification ${type}`;
  container.style.top = `${posTop}px`;
  container.style.right = `${posRight}px`;
  body.appendChild(container);

  h2.className = 'title';
  h2.style.whiteSpace = 'nowrap';
  h2.innerText = `${title}`;
  container.appendChild(h2);

  p.innerText = `${description}`;
  container.appendChild(p);

  setTimeout(() => {
    // body.removeChild(container);
    container.style.visibility = 'hidden';
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
