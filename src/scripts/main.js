'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const infoBlock = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageDescription = document.createElement('p');

  infoBlock.classList.add('notification');
  infoBlock.classList.add(`${type}`);
  messageTitle.classList.add('title');

  messageTitle.textContent = title;
  messageDescription.textContent = description;

  infoBlock.style.width = '315px';
  infoBlock.style.right = `${posRight}px`;
  infoBlock.style.top = `${posTop}px`;

  infoBlock.appendChild(messageTitle);
  infoBlock.appendChild(messageDescription);
  body.appendChild(infoBlock);

  setTimeout(() => {
    body.removeChild(infoBlock);
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
