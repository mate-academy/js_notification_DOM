/* eslint-env browser */

'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const mainBlock = document.createElement('div');

  mainBlock.classList.add('notification', type);

  const titleNotification = document.createElement('h2');

  titleNotification.className = 'title';
  titleNotification.textContent = title;
  mainBlock.append(titleNotification);

  const descriptionNotification = document.createElement('p');

  descriptionNotification.textContent = description;
  mainBlock.append(descriptionNotification);

  mainBlock.style.top = posTop + 'px';
  mainBlock.style.right = posRight + 'px';
  document.body.append(mainBlock);

  setTimeout(() => {
    mainBlock.style.visibility = 'hidden';
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
