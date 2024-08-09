'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const divEl = document.createElement('div');

  divEl.className = `notification ${type}`;

  divEl.style.position = 'absolute';
  divEl.style.top = `${posTop}px`;
  divEl.style.right = `${posRight}px`;

  const titleEl = document.createElement('h2');

  titleEl.className = 'title';
  titleEl.textContent = title;

  const descEl = document.createElement('p');

  descEl.textContent = description;

  divEl.appendChild(titleEl);
  divEl.appendChild(descEl);

  document.body.appendChild(divEl);

  setTimeout(() => {
    divEl.remove();
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
