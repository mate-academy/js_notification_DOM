'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const newElement = document.createElement('div');
  const logoElement = document.querySelector('.logo');

  newElement.setAttribute('class', `notification ${type}`);

  const htmlBlock = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `;

  newElement.innerHTML = htmlBlock;
  newElement.style.top = `${posTop}px`;
  newElement.style.right = `${posRight}px`;

  logoElement.after(newElement);

  setTimeout(() => {
    newElement.style.display = 'none';
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
