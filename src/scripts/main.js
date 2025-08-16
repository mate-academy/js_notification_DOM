'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');

  element.classList.add('notification', type);
  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;

  const elementTitle = document.createElement('h2');

  elementTitle.classList.add('title');
  elementTitle.textContent = title;

  const elementDescription = document.createElement('p');

  elementDescription.textContent = description;
  element.appendChild(elementTitle);
  element.appendChild(elementDescription);
  document.body.appendChild(element);

  setTimeout(function () {
    element.style.display = 'none';
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
