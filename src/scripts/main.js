'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const newDiv = document.createElement('div');

  newDiv.className = `notification ${type}`;
  newDiv.style.top = `${posTop}px`;
  newDiv.style.right = `${posRight}px`;

  newDiv.innerHTML = `
    <h2 class = "title">${title}</h2>
    <p>${description}</p>
  `;

  body.insertBefore(newDiv, body.lastChild);

  setTimeout(() => newDiv.remove(), 2000);
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
