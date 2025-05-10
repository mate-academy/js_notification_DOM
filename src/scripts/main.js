'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const newEl = document.createElement('div');
  const newTitle = document.createElement('h2');
  const newText = document.createElement('p');

  newEl.classList.add('notification', type);
  newTitle.classList.add('title');

  newTitle.innerText = title;
  newText.innerText = description;

  newEl.style.top = `${posTop}px`;
  newEl.style.right = `${posRight}px`;

  newEl.appendChild(newTitle);
  newEl.appendChild(newText);
  document.body.appendChild(newEl);

  setTimeout(() => {
    newEl.style.visibility = 'hidden';
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
