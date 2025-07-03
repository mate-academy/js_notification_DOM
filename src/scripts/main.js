'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const mainBlock = document.createElement('div');

  mainBlock.classList.add('notification');
  mainBlock.classList.add(type);

  const mainText = document.createElement('h2');

  mainText.textContent = title;
  mainText.classList.add('title');
  mainBlock.appendChild(mainText);

  const additionalText = document.createElement('p');

  additionalText.textContent = description;

  mainBlock.appendChild(additionalText);

  mainBlock.style.top = `${posTop}px`;
  mainBlock.style.right = `${posRight}px`;
  mainBlock.style.position = 'absolute';

  document.body.appendChild(mainBlock);

  setTimeout(() => {
    mainBlock.style.display = 'none';
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
