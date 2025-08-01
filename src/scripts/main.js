'use strict';

const pushNotification = (posTop, posRight = 10, title, description, type) => {
  const element = document.createElement('div');
  const titleElement = document.createElement('h2');
  const descElement = document.createElement('p');

  element.classList.add('notification', type);
  titleElement.classList.add('title');

  titleElement.innerText = title;
  descElement.innerText = description;

  element.appendChild(titleElement);
  element.appendChild(descElement);

  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;

  document.body.appendChild(element);

  setTimeout(() => {
    element.style.display = 'none';
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\nNotification should contain title and description.',
  'success'
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\nNotification should contain title and description.',
  'error'
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\nNotification should contain title and description.',
  'warning'
);
