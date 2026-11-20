'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;
  notification.style.padding = '5px 10px';
  notification.style.borderRadius = '10px';

  if (type === 'success') {
    notification.style.backgroundColor = 'green';
  } else if (type === 'error') {
    notification.style.backgroundColor = 'red';
  } else {
    notification.style.backgroundColor = 'yellow';
  }

  const titleElement = document.createElement('h2');

  titleElement.className = 'title';
  titleElement.textContent = title;

  const descriptionElement = document.createElement('p');

  descriptionElement.className = 'description';
  descriptionElement.innerText = description;

  notification.append(titleElement, descriptionElement);
  document.body.append(notification);

  setTimeout(() => (notification.style.visibility = 'hidden'), 5000);
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
