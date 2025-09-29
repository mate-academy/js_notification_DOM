'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;
  notification.style.position = 'absolute';
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;
  notification.style.padding = '10px';
  notification.style.borderRadius = '5px';
  notification.style.width = '300px';
  notification.style.color = '#fff';
  notification.style.fontFamily = 'Arial, sans-serif';

  if (type === 'success') {
    notification.style.backgroundColor = '#4CAF50';
  } else if (type === 'error') {
    notification.style.backgroundColor = '#F44336';
  } else if (type === 'warning') {
    notification.style.backgroundColor = '#FF9800';
  }

  const titleElem = document.createElement('h2');

  titleElem.className = 'title';
  titleElem.textContent = title;
  titleElem.style.margin = '0 0 5px 0';
  titleElem.style.fontSize = '18px';

  const messageElem = document.createElement('p');

  messageElem.className = 'message';
  messageElem.textContent = description;
  messageElem.style.margin = '0';
  messageElem.style.whiteSpace = 'pre-line';

  notification.appendChild(titleElem);
  notification.appendChild(messageElem);

  document.body.appendChild(notification);

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
