'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const elMessage = document.createElement('div');

  elMessage.classList.add('notification', type);
  elMessage.style.top = `${posTop}px`;
  elMessage.style.right = `${posRight}px`;

  const elTitle = document.createElement('h2');

  elTitle.classList.add('title');
  elTitle.textContent = title;
  elMessage.append(elTitle);

  const eltext = document.createElement('p');

  eltext.textContent = description;
  elMessage.append(eltext);

  document.body.append(elMessage);

  setTimeout(() => {
    elMessage.style.display = 'none';
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
