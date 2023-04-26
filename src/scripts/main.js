'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationElement = document.createElement('div');

  notificationElement.classList.add('notification');
  notificationElement.classList.add(type);
  notificationElement.style.top = `${posTop}px`;
  notificationElement.style.right = `${posRight}px`;

  const titleElement = document.createElement('h2');

  titleElement.classList.add('title');
  titleElement.innerHTML = title;
  notificationElement.appendChild(titleElement);

  const descriptionElement = document.createElement('p');

  descriptionElement.innerHTML = description;
  notificationElement.appendChild(descriptionElement);

  document.body.appendChild(notificationElement);

  setTimeout(function() {
    document.body.removeChild(notificationElement);
  }, 2000);
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
