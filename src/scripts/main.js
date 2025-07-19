'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');
  const body = document.querySelector('body');
  const messageTitle = document.createElement('h2');

  messageTitle.classList.add('title');

  const messageText = document.createElement('p');

  element.classList.add('notification');
  element.classList.add(`${type}`);
  messageTitle.innerText = title;
  messageText.innerText = description;

  element.appendChild(messageTitle);
  element.appendChild(messageText);

  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;

  body.appendChild(element);

  window.setTimeout(function () {
    element.style.visibility = 'hidden';
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
