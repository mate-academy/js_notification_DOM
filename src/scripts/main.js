'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const divBlock = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageDescription = document.createElement('p');
  const bodyBlock = document.querySelector('body');

  divBlock.classList.add('notification');
  divBlock.classList.add(`${type}`);
  divBlock.style.top = `${posTop}px`;
  divBlock.style.right = `${posRight}px`;

  messageTitle.textContent = title;
  messageTitle.classList.add('title');

  messageDescription.textContent = description;

  divBlock.appendChild(messageTitle);
  divBlock.appendChild(messageDescription);

  bodyBlock.appendChild(divBlock);

  setTimeout(() => {
    divBlock.style.display = 'none';
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
