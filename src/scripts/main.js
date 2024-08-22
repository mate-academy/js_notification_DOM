'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const titleElement = document.createElement('h2');
  const textNotification = document.createElement('p');

  notification.classList.add('notification', type);
  titleElement.classList.add('title');

  titleElement.innerText = title;
  textNotification.innerText = description;

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;
  titleElement.style.whiteSpace = 'nowrap'
  
  notification.append(titleElement, textNotification);
  document.body.append(notification);

  setTimeout(() => {
      notification.style.visibility = 'hidden';
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
