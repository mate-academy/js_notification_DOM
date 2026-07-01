'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const element = document.createElement('div');
  const notTitle = document.createElement('h2');
  const notDescription = document.createElement('p');

  element.className = 'notification';

  element.classList.add(`${type}`);
  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;

  notTitle.textContent = title;

  notTitle.className = 'title';
  notDescription.textContent = description;

  element.append(notTitle, notDescription);
  document.body.appendChild(element);

  setTimeout(() => {
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
