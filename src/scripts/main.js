'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const blockError = document.createElement('div');

  blockError.className = `notification ${type}`;
  blockError.style.top = `${posTop}px`;
  blockError.style.right = `${posRight}px`;

  blockError.insertAdjacentHTML('afterbegin', `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `);

  document.querySelector('.logo').after(blockError);

  setTimeout(() => {
    blockError.style.display = 'none';
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
