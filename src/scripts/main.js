'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const newElem = document.createElement('div');
  const titleEl = document.createElement('h2');
  const descriptionEl = document.createElement('p');

  newElem.classList.add('notification', type);
  titleEl.className = 'title';

  newElem.style.top = `${posTop}px`;
  newElem.style.right = `${posRight}px`;

  titleEl.textContent = title;
  descriptionEl.textContent = description;

  newElem.append(titleEl, descriptionEl);
  document.body.append(newElem);

  setTimeout(() => {
    newElem.style.display = 'none';
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
