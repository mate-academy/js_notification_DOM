'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const container = document.createElement('div');

  container.classList.add('notification');
  container.style.position = 'absolute';
  container.style.top = posTop + 'px';
  container.style.right = posRight + 'px';
  container.style.opacity = '0.5';

  if (type === 'success') {
    container.classList.add('success');
    container.style.background = 'green';
  }

  if (type === 'error') {
    container.classList.add('error');
    container.style.background = 'red';
  }

  if (type === 'warning') {
    container.classList.add('warning');
    container.style.background = 'yellow';
  }

  const h2 = document.createElement('h2');

  h2.textContent = title;
  container.appendChild(h2);

  const p = document.createElement('p');

  p.textContent = description;
  container.appendChild(p);

  document.body.appendChild(container);

  setTimeout(() => {
    container.style.display = 'none';
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
