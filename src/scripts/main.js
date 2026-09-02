'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification');
  notification.classList.add(type);
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  const titleElement = document.createElement('h2');

  titleElement.setAttribute('class', 'title');
  titleElement.textContent = title;

  const descriptionElement = document.createElement('p');

  descriptionElement.setAttribute('class', 'description');
  descriptionElement.textContent = description;

  notification.append(titleElement, descriptionElement);

  document.body.append(notification);

  function hide(element) {
    element.style.display = 'none';
  }

  setTimeout(() => hide(notification), 2000);
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
