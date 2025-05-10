'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const container = document.createElement('container');

  container.classList.add('notification');

  if (type === 'success') {
    container.classList.add('notification', 'success');
  } else if (type === 'error') {
    container.classList.add('notification', 'error');
  } else if (type === 'warning') {
    container.classList.add('notification', 'warning');
  }

  const messageTitle = document.createElement('h2');

  messageTitle.classList.add('title');
  messageTitle.textContent = title;

  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;

  container.style.top = posTop + 'px';
  container.style.right = posRight + 'px';

  document.body.appendChild(container);
  container.appendChild(messageTitle);
  container.appendChild(descriptionElement);

  setTimeout(() => {
    container.style.display = 'none';
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
