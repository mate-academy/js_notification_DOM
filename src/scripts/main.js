'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const element = document.createElement('div');
  const elementTitle = document.createElement('h2');
  const elementDescription = document.createElement('p');

  element.className = 'notification';
  elementTitle.innerText = title;
  elementTitle.className = 'title';
  elementDescription.innerText = description;

  element.appendChild(elementTitle);
  element.appendChild(elementDescription);

  body.appendChild(element);

  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;

  element.classList.add(type);

  setTimeout(() => element.remove(), 2000);
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
