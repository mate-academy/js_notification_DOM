'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const elementBox = document.createElement('div');

  elementBox.classList.add('notification', type);
  elementBox.style.top = `${posTop}px`;
  elementBox.style.right = `${posRight}px`;

  elementBox.innerHTML += `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `;

  document.body.appendChild(elementBox);

  setTimeout(() => {
    document.body.removeChild(elementBox);
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',

  'Message example.\n '
  + 'Notification should contain title and description.',
  'warning',
);
