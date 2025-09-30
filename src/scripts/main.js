'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');

  div.classList.add('notification', type);
  div.style.position = 'absolute';
  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;
  document.body.appendChild(div);

  const titleEl = document.createElement('h2');

  titleEl.classList.add('title');
  titleEl.textContent = title;
  div.appendChild(titleEl);

  const desEl = document.createElement('p');

  desEl.classList.add('description');
  desEl.textContent = description;
  div.appendChild(desEl);

  setTimeout(() => {
    div.style.display = 'none';
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
  170,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  300,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
