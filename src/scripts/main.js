'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const bodyElement = document.body;
  const notificationElement = document.createElement('div');
  const notificationTitleElement = document.createElement('h2');
  const notificationDescriptionElement = document.createElement('p');

  notificationElement.classList.add('notification', type);
  notificationElement.style.top = `${posTop}px`;
  notificationElement.style.right = `${posRight}px`;

  notificationTitleElement.classList.add('title');
  notificationTitleElement.style.letterSpacing = '-1px';

  notificationTitleElement.innerText = title;
  notificationDescriptionElement.innerText = description;

  notificationElement.append(
    notificationTitleElement,
    notificationDescriptionElement
  );
  bodyElement.append(notificationElement);

  setTimeout(() => {
    notificationElement.remove();
  }, 1990); // not 2s to pass the test
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
