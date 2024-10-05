'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');

  block.className = `notification ${type}`;
  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;

  const titleText = document.createElement('h2');

  titleText.className = 'title';
  titleText.textContent = `${title}`;

  const descriptionText = document.createElement('p');

  descriptionText.textContent = `${description}`;

  block.appendChild(titleText);
  block.appendChild(descriptionText);

  const container = document.querySelector('body');

  container.appendChild(block);

  setTimeout(() => {
    block.style.display = 'none';
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
