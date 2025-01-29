'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const wrapper = document.createElement('div');

  wrapper.className = `notification ${type}`;
  wrapper.style.top = `${posTop}px`;
  wrapper.style.right = `${posRight}px`;

  const notificationTitle = document.createElement('h2');

  notificationTitle.className = 'title';
  notificationTitle.textContent = `${title}`;

  const notificationText = document.createElement('p');

  notificationText.textContent = `${description}`;

  wrapper.appendChild(notificationTitle);
  wrapper.appendChild(notificationText);
  document.body.appendChild(wrapper);

  setTimeout(() => {
    wrapper.style.display = 'none';
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
