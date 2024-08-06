'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.setAttribute('class', `notification ${type}`);
  document.body.append(notification);

  const titleElement = document.createElement('h2');

  titleElement.innerText = title;
  titleElement.setAttribute('class', 'title');
  notification.append(titleElement);

  const descriptionElement = document.createElement('p');

  descriptionElement.innerText = description;
  notification.append(descriptionElement);

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;
  titleElement.style.whiteSpace = 'nowrap';

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
