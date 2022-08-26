'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  document.body.insertAdjacentHTML('afterbegin', `
    <div
      class="notification ${type}"
      style="box-sizing: content-box; right: ${posRight}px; top: ${posTop}px;"
    >
      <h2>${title}</h2>
      <p>${description}</p>
    </div>
  `);

  const needToDelete = document.querySelector(`.${type}`);

  setTimeout(() => {
    needToDelete.remove();
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
