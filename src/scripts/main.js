'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageDescription = document.createElement('p');

  message.classList.add('notification');
  messageTitle.classList.add('title');
  message.appendChild(messageTitle);
  message.appendChild(messageDescription);

  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';
  messageTitle.textContent = title;
  messageDescription.textContent = description;

  switch (type) {
    case 'warning':
      message.classList.add('warning');
      break;

    case 'success':
      message.classList.add('success');
      break;

    case 'error':
      message.classList.add('error');
      break;
  }

  document.body.appendChild(message);

  // setTimeout(() => {
  //   message.style.visibility = 'hidden';
  // }, 2000);
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
