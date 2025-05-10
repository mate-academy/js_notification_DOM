'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.classList.add(type);
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';
  document.body.append(notification);

  const titleElement = document.createElement('h2');
  titleElement.classList.add('title');
  titleElement.textContent = title;
  notification.append(titleElement);

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = description;
  notification.append(descriptionElement);

  setTimeout(() => {
    notification.remove();
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
