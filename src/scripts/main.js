'use strict';

function createElementWithClass(elementType, className, content) {
  const element = document.createElement(elementType);

  element.classList.add(className);
  element.textContent = content;

  return element;
}

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  const titleElement = createElementWithClass('h2', 'title', title);

  const descriptionElement
    = createElementWithClass('p', 'description', description);

  notification.style.position = 'absolute';
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  notification.appendChild(titleElement);
  notification.appendChild(descriptionElement);

  document.body.appendChild(notification);

  setTimeout(() => {
    document.body.removeChild(notification);
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
