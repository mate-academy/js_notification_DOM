'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const newElement = document.querySelector('body');
  const createMessage = document.createElement('div');

  createMessage.classList.add('notification');
  createMessage.classList.add(type);

  createMessage.innerHTML = `
  <h2 class = 'title'>${title}</h2>
  <p>${description}</p>
  `;

  createMessage.style.top = `${posTop}px`;
  createMessage.style.right = `${posRight}px`;

  newElement.append(createMessage);

  setTimeout(() => {
    createMessage.style.display = 'none';
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
