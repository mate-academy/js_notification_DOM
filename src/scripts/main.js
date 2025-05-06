'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');

  element.className = 'notification';
  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;
  element.classList.add(type);

  const titleEl = document.createElement('h2');

  titleEl.textContent = title;
  titleEl.classList.add('title');
  element.appendChild(titleEl);

  const descriptionEl = document.createElement('p');

  descriptionEl.textContent = description;
  element.appendChild(descriptionEl);

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
