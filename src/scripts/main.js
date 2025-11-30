'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const container = document.createElement('div');

  container.classList.add('notification', type);
  container.style.top = `${posTop}px`;
  container.style.right = `${posRight}px`;

  const textTitel = document.createElement('h2');

  textTitel.classList.add('title');
  textTitel.textContent = title;
  container.appendChild(textTitel);

  const textDescription = document.createElement('p');

  textDescription.textContent = description;
  container.appendChild(textDescription);

  if (type === 'success') {
    container.classList.add('success');
  }

  if (type === 'error') {
    container.classList.add('error');
  }

  if (type === 'warning') {
    container.classList.add('warning');
  }
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
