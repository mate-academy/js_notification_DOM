'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  document.body.insertAdjacentHTML('beforeend', `
  <div class="notification ${type}"
       style="position: absolute;
       top: ${posTop}px;
       right: ${posRight}px;"
  >
    <h2>${title}</h2>
    <p>${description}</p>
  </div>
  `);

  const notification = document.querySelector(`.${type}`);

  setTimeout(() => {
    notification.remove();
  }, 3000);
};

setTimeout(() => {
  pushNotification(10, 10, 'Title of Success message',
    'Message example.\n '
    + 'Notification should contain title and description.', 'success');
}, 1000);

setTimeout(() => {
  pushNotification(164, 10, 'Title of Error message',
    'Message example.\n '
    + 'Notification should contain title and description.', 'error');
}, 2000);

setTimeout(() => {
  pushNotification(290, 10, 'Title of Warning message',
    'Message example.\n '
    + 'Notification should contain title and description.', 'warning');
}, 3000);
