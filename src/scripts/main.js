'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const div = document.createElement('div');
  const titleNotification = document.createElement('h2');
  const descriptionNotification = document.createElement('p');

  div.className = 'notification';
  div.classList.add(type);
  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;

  titleNotification.classList.add('title');
  titleNotification.textContent = title;

  descriptionNotification.textContent = description;

  div.append(titleNotification, descriptionNotification);
  body.append(div);

  setTimeout(() => {
    div.style.display = 'none';
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
