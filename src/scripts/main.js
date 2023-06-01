'use strict';

const body = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageDescription = document.createElement('p');
  const dotIndex = description.indexOf('.');

  message.classList.add('notification', type);
  messageTitle.classList.add('title');
  messageTitle.textContent = title;
  messageDescription.textContent = description;

  if (dotIndex !== -1) {
    const firstPart = description.substring(0, dotIndex + 1);
    const secondPart = description.substring(dotIndex + 1);

    messageDescription.innerHTML = `${firstPart}<br>${secondPart}`;
  } else {
    messageDescription.textContent = description;
  }

  message.appendChild(messageTitle);
  message.appendChild(messageDescription);

  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';
  message.style.boxSizing = 'content-box';

  body.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
