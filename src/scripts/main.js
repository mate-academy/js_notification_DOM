'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const notificationBlock = document.createElement('div');
  const headline = document.createElement('h2');
  const paragraph = document.createElement('p');

  notificationBlock.className = `notification ${type}`;
  notificationBlock.style.top = `${posTop}px`;
  notificationBlock.style.right = `${posRight}px`;

  headline.className = 'title';
  headline.textContent = title;

  paragraph.textContent = description;

  notificationBlock.appendChild(headline);
  notificationBlock.appendChild(paragraph);

  document.body.appendChild(notificationBlock);

  setTimeout(() => {
    notificationBlock.style.visibility = 'hidden';
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
