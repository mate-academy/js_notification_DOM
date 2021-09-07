'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const newElement = document.querySelector('body');
  const createdMessage = document.createElement('div');

  createdMessage.classList.add('notification');
  createdMessage.classList.add(type);

  createdMessage.innerHTML = `
    <h2 class = 'title'>${title}</h2>
    <p>${description}</p>
  `;

  createdMessage.style.top = `${posTop}px`;
  createdMessage.style.right = `${posRight}px`;

  newElement.append(createdMessage);

  setTimeout(() => {
    createdMessage.remove();
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
