'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const newDiv = document.createElement('div');

  newDiv.classList.add('notification', type);

  const newHead = document.createElement('h2');

  newHead.classList.add('title');
  newHead.textContent = title;

  const newP = document.createElement('p');

  newP.textContent = description;

  newDiv.appendChild(newHead);
  newDiv.appendChild(newP);

  newDiv.style.top = posTop + 'px';
  newDiv.style.right = posRight + 'px';
  newP.style.whiteSpace = 'pre-line';

  document.body.appendChild(newDiv);

  setTimeout(() => {
    newDiv.style.display = 'none';
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
