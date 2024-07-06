'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');

  const container = document.createElement('div');

  container.className = `notification ${type}`;
  container.style.cssText = `top: ${posTop}px; right: ${posRight}px;`;

  container.innerHTML = `
      <h2 class="title">${title}</h2>
      <p>${description}</p>
    `;

  body.appendChild(container);

  setTimeout(() => (container.style.visibility = 'hidden'), 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n Notification should contain title and description.',
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
