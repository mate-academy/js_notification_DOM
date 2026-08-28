'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const newBlock = document.createElement('div');

  newBlock.classList.add('notification', type);
  newBlock.style.top = posTop + 'px';
  newBlock.style.right = posRight + 'px';
  document.body.append(newBlock);

  const newText = document.createElement('h2');

  newText.classList.add('title');
  newText.innerText = title;
  newBlock.append(newText);

  const newP = document.createElement('p');

  newP.innerText = description;
  newBlock.append(newP);

  setTimeout(() => {
    newBlock.style.visibility = 'hidden';
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
