'use strict';

function pushNotification(posTop, posRight, title, description, type) {
  const notification = document.createElement('div');

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  const titleNotification = document.createElement('h2');
  const descriptionNotification = document.createElement('p');

  notification.classList.add('notification');
  notification.classList.add(type);
  titleNotification.classList.add('title');
  descriptionNotification.classList.add('description');

  titleNotification.textContent = title;
  descriptionNotification.innerHTML = description.replace(/\n/g, '<br>');

  notification.appendChild(titleNotification);
  notification.appendChild(descriptionNotification);

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
}

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
