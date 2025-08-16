'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');

  document.body.prepend(div);

  div.innerHTML = `<h2>${title}</h2>
  <p>${description}</p>`;
  div.firstChild.className = 'title';

  div.className = `${type} notification`;

  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;

  setTimeout(() => {
    div.style.cssText = 'display: none';
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
