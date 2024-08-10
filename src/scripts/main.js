'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const body = document.querySelector('body');
  const message = document.createElement('div');

  message.style.position = 'fixed';
  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';
  message.classList.add('notification');

  message.innerHTML = `
  <h2 class="title">${title}</h2>
  <p>${description}</p>`;

  if (type === 'success') {
    message.classList.add('success');
  } else if (type === 'error') {
    message.classList.add('error');
  } else {
    message.classList.add('warning');
  }

  body.append(message);

  setTimeout(() => {
    message.style.display = 'none';
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
