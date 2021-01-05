'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const noticing = document.createElement('div');
  const bodyPos = document.querySelector('body');

  noticing.className = `notification ${type}`;
  noticing.style.top = `${posTop}px`;
  noticing.style.right = `${posRight}px`;

  noticing.insertAdjacentHTML('afterbegin', `
    <h2 class="title">${title}</h2>
    <p class="description">${description}</p>
  `);

  bodyPos.append(noticing);

  setTimeout(() => {
    noticing.remove();
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
