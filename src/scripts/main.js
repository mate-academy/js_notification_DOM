'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const form = document.querySelector('body');
  const blockNotification = document.createElement('div');
  const header = document.createElement('h2');
  const notificationDescription = document.createElement('p');

  blockNotification.style.top = `${posTop}px`;
  blockNotification.style.right = `${posRight}px`;
  blockNotification.classList.add('notification');
  header.classList.add('title');
  header.innerText = title;
  notificationDescription.innerText = description;

  if (type === 'success') {
    blockNotification.classList.add('success');
  }

  if (type === 'error') {
    blockNotification.classList.add('error');
  }

  if (type === 'warning') {
    blockNotification.classList.add('warning');
  }

  blockNotification.appendChild(header);
  blockNotification.appendChild(notificationDescription);
  form.appendChild(blockNotification);

  setTimeout(() => {
    blockNotification.style.display = 'none';
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
