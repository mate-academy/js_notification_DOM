'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const elem = document.createElement('div');
  const elemTitle = document.createElement('h2');
  const elemContent = document.createElement('p');

  elem.classList.add('notification', type);
  elemTitle.classList.add('title');

  elemTitle.textContent = title;
  elemContent.textContent = description;

  elem.appendChild(elemTitle);
  elem.appendChild(elemContent);

  elem.style.position = 'absolute';
  elem.style.top = `${posTop}px`;
  elem.style.right = `${posRight}px`;

  document.body.append(elem);

  setTimeout(() => {
    elem.remove();
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
