'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const elem = document.createElement('div');
  const elemTitle = document.createElement('h2');
  const elemDescription = document.createElement('p');

  body.appendChild(elem);
  elem.appendChild(elemTitle);
  elem.appendChild(elemDescription);

  elem.classList.add('notification');
  elem.classList.add(type);
  elemTitle.classList.add('title');
  elemTitle.textContent = title;
  elemDescription.textContent = description;

  elem.style.top = `${posTop}px`;
  elem.style.right = `${posRight}px`;

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
