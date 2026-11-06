'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const element = document.createElement('div');

  element.classList.add('notification', type);

  const titleElement = document.createElement('h2');

  titleElement.classList.add('title');
  titleElement.textContent = title;
  element.append(titleElement);

  const paragraph = document.createElement('p');

  paragraph.textContent = description;
  element.append(paragraph);

  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;
  document.body.append(element);

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
