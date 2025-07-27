'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const noteBlock = document.createElement('div');

  noteBlock.classList.add('notification', type);

  noteBlock.style.top = posTop + 'px';
  noteBlock.style.right = posRight + 'px';

  const titleBlock = document.createElement('h2');

  titleBlock.classList.add('title');
  titleBlock.textContent = title;
  noteBlock.appendChild(titleBlock);

  const descrBlock = document.createElement('p');

  descrBlock.textContent = description;
  noteBlock.appendChild(descrBlock);
  document.body.appendChild(noteBlock);

  setTimeout(() => {
    noteBlock.style.display = 'none';
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
