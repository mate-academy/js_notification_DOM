'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');

  body.insertAdjacentHTML('beforeend', `
  <div class="notification ${type}">
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  </div>
`);

  const div = document.querySelector(`.${type}`);

  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;

  setTimeout(() => div.remove(), 2000);
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
