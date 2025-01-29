'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  document.querySelector('.logo').after(notification);

  notification.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
  `;

  notification.style.cssText = `
    box-sizing: border-box;
    position: absolute;
    top: ${posTop}px;
    right: ${posRight}px;
    width: 350px;
    padding: 5px 15px;
    border-radius: 20px;
    background-color: red;
  `;

  if (type === 'success') {
    notification.style.backgroundColor = '#c0ddb5';
  } else if (type === 'error') {
    notification.style.backgroundColor = '#ecb5b1';
  } else {
    notification.style.backgroundColor = '#f1e5bf';
  }

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
