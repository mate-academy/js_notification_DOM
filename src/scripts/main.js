'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const block = document.createElement('div');

  block.classList.add(`notification`, type);
  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;

  const notificationTitle = document.createElement('h2');

  notificationTitle.textContent = title;
  notificationTitle.classList.add('title');

  const notificationMessage = document.createElement('p');

  setTimeout(() => {
    block.remove();
  }, 2000);

  notificationMessage.textContent = description;

  block.insertAdjacentHTML('beforeend', `
  <h2 class="title">${notificationTitle.textContent}e</h2>
  <p>${notificationMessage.textContent}</p>
  `);

  body.insertBefore(block, body.children[0]);
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
