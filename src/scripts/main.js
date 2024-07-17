'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  const titleOfDiv = document.createElement('h2');
  const paragraph = document.createElement('p');

  notification.classList.add('notification');
  notification.classList.add(type);
  titleOfDiv.classList.add('title');
  paragraph.classList.add('description');

  titleOfDiv.textContent = title;
  paragraph.textContent = description;

  notification.appendChild(titleOfDiv);
  notification.appendChild(paragraph);

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.display = 'none';
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
