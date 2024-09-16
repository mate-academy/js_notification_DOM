'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const newElement = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  newElement.className = `notification ${type}`;
  h2.className = 'title';
  h2.textContent = title;
  p.textContent = description;

  newElement.append(h2, p);
  body.append(newElement);

  newElement.style.top = `${posTop}px`;
  newElement.style.right = `${posRight}px`;

  setTimeout(() => {
    newElement.remove();
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
