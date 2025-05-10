'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const div = document.createElement('div');

  div.classList.add('notification', type);

  const msgTitle = document.createElement('h2');

  msgTitle.classList.add('title');
  msgTitle.textContent = title;

  const msgDescription = document.createElement('p');

  msgDescription.textContent = description;

  div.appendChild(msgTitle);
  div.appendChild(msgDescription);

  div.style.position = 'absolute';
  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;

  document.body.appendChild(div);

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
