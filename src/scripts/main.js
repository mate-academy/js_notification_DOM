'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const notification = document.createElement('DIV');
  const titleElement = document.createElement('H2');
  const descriptionElement = document.createElement('P');

  titleElement.className = 'title';
  titleElement.innerText = title;

  descriptionElement.innerText = description;

  notification.className = `notification ${type}`;
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  notification.append(titleElement, descriptionElement);

  document.body.append(notification);

  setTimeout(() => {
    // when notifcation removed from DOM not passing tests
    // notification.remove();

    // notification still in DOM but invisible
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
