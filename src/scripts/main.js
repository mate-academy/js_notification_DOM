'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');

  block.classList.add('notification');
  block.classList.add(type);
  block.style.top = posTop + 'px';
  block.style.right = posRight + 'px';
  document.body.appendChild(block);

  const titles = document.createElement('h2');

  titles.classList.add('title');
  titles.textContent = title;
  block.appendChild(titles);

  const descriptions = document.createElement('p');

  descriptions.textContent = description;
  block.appendChild(descriptions);

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
