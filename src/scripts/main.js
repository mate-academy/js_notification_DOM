'use strict';

const body = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  const box = document.createElement('div');

  box.className = `notification ${
    (type === 'warning' && 'warning') ||
    (type === 'success' && 'success') ||
    (type === 'error' && 'error')
  }`;

  box.style.top = `${posTop}px`;
  box.style.right = `${posRight}px`;

  const titleOfNotification = document.createElement('h2');

  titleOfNotification.textContent = title;

  titleOfNotification.className = 'title';

  const descriptionOfNotification = document.createElement('p');

  descriptionOfNotification.textContent = description;

  body.append(box);
  box.appendChild(titleOfNotification);
  box.appendChild(descriptionOfNotification);

  setTimeout(() => {
    box.style.display = 'none';
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
