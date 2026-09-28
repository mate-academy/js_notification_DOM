'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');
  const titleH = document.createElement('h2');
  const descriptionH = document.createElement('p');
  const main = document.querySelector('body');

  titleH.textContent = title;
  descriptionH.textContent = description;
  block.classList.add('notification', type);
  titleH.setAttribute('class', 'title');

  block.prepend(descriptionH);
  block.prepend(titleH);

  main.before(block);

  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;

  setTimeout(() => {
    block.style.visibility = 'hidden';
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
