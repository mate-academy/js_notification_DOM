'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');

  element.style.top = posTop + 'px';
  element.style.right = posRight + 'px';

  element.classList.add('notification', `notification--${type}`);
  document.body.appendChild(element);

  const titleElement = document.createElement('h2');

  titleElement.className = 'title';
  titleElement.textContent = title;
  element.appendChild(titleElement);

  const descriptionElement = document.createElement('p');

  descriptionElement.className = 'description';
  descriptionElement.textContent = description;
  element.appendChild(descriptionElement);

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
