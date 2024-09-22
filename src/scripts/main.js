'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const getBody = document.querySelector('body');

  const createElementDiv = document.createElement('div');

  createElementDiv.classList.add('notification');
  createElementDiv.classList.add(type);

  createElementDiv.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `;

  createElementDiv.style.top = `${posTop}px`;
  createElementDiv.style.right = `${posRight}px`;

  getBody.appendChild(createElementDiv);

  setTimeout(() => {
    createElementDiv.style.display = 'none';
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
