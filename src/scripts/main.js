'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const element = document.createElement('div');

  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;
  element.style.boxSizing = 'content-box';
  element.classList.add('notification', type);

  const elTitle = document.createElement('h2');

  elTitle.classList.add('title');
  elTitle.innerText = title;
  elTitle.style.whiteSpace = 'nowrap';
  element.append(elTitle);

  const elDescription = document.createElement('p');

  elDescription.innerText = description;
  element.append(elDescription);
  body.append(element);

  setTimeout(() => {
    element.remove();
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
