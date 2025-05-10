'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const newDiv = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  p.classList.add('description');
  h2.classList.add('title');
  newDiv.classList.add('notification', type);

  p.textContent = description;
  h2.textContent = title;

  newDiv.appendChild(h2);
  newDiv.appendChild(p);
  newDiv.style.top = `${posTop}px`;
  newDiv.style.right = `${posRight}px`;
  document.body.appendChild(newDiv);

  setTimeout(() => {
    newDiv.remove();
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
