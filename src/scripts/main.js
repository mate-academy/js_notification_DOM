'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationBlock = document.createElement('div');
  const titleText = document.createElement('h2');
  const descriptionText = document.createElement('p');

  notificationBlock.classList.add('notification');
  notificationBlock.classList.add(`${type}`);
  titleText.setAttribute('class', 'title');

  titleText.textContent = title;
  descriptionText.textContent = description;

  notificationBlock.style.position = 'absolute';
  notificationBlock.style.top = `${posTop}px`;
  notificationBlock.style.right = `${posRight}px`;

  document.body.appendChild(notificationBlock);
  notificationBlock.appendChild(titleText);
  notificationBlock.appendChild(descriptionText);

  setTimeout(() => {
    notificationBlock.remove();
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
