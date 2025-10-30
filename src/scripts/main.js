'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');
  const titleElem = document.createElement('h2');
  const descrElem = document.createElement('p');

  element.classList.add('notification', type);
  titleElem.classList.add('title');
  titleElem.textContent = title;
  descrElem.textContent = description;

  element.style.top = posTop + 'px';
  element.style.right = posRight + 'px';

  document.body.appendChild(element);
  element.appendChild(titleElem);
  element.appendChild(descrElem);

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
