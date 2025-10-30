'use strict';

const pushNotification = (coordinates, title, description, type) => {
  const element = document.createElement('div');
  const titleElem = document.createElement('h2');
  const descrElem = document.createElement('p');

  element.classList.add('notification', type);
  titleElem.classList.add('title');
  titleElem.textContent = title;
  descrElem.textContent = description;

  element.style.top = coordinates.top + 'px';
  element.style.right = coordinates.right + 'px';

  document.body.appendChild(element);
  element.appendChild(titleElem);
  element.appendChild(descrElem);

  setTimeout(() => {
    element.style.display = 'none';
  }, 2000);
};

pushNotification(
  { top: 10, right: 10 },
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  { top: 150, right: 10 },
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  { top: 290, right: 10 },
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
