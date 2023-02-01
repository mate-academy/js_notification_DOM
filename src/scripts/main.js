'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const h1 = document.querySelector('h1');

  h1.insertAdjacentHTML('afterend',
    `<div class='notification ${type}'>
      <h2 class='title'>${title}</h2>
      <p>${description}</p>
    </div>`
  );

  const element = document.querySelector(`.${type}`);

  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;

  setTimeout(() => {
    element.setAttribute('hidden', 'true');
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

setTimeout(() => {
  pushNotification(150, 10, 'Title of Error message',
    'Message example.\n '
    + 'Notification should contain title and description.', 'error');
}, 1000);

setTimeout(() => {
  pushNotification(290, 10, 'Title of Warning message',
    'Message example.\n '
    + 'Notification should contain title and description.', 'warning');
}, 2000);
