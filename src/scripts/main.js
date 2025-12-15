'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');

  block.classList.add('notification', type);
  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;


  const head = document.createElement('h2');

  head.textContent = title;
  head.className = 'title';
  block.insertAdjacentElement('beforeend', head);

  const descriptionText = document.createElement('p');

  descriptionText.textContent = description;
  block.insertAdjacentElement('beforeend', descriptionText);

  document.body.insertAdjacentElement('afterbegin', block);
  setTimeout(() => (block.style.visibility = 'hidden'), 2000);
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
