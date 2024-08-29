'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');

  const div = document.createElement('div');
  const titleOfMessage = document.createElement('h2');
  const p = document.createElement('p');

  div.className = `notification ${type}`;
  titleOfMessage.className = 'title';

  titleOfMessage.textContent = title;
  p.textContent = description;

  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;

  body.appendChild(div);
  div.appendChild(titleOfMessage);
  div.appendChild(p);

  setTimeout(() => {
    div.remove();
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
