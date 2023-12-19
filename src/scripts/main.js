'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  document.querySelector('body')
    .insertAdjacentHTML('beforeend', `
      <div
        class="notification ${type}"
        style="
          top: ${posTop}px;
          right: ${posRight}px;
        "
      >
        <h2 class="title">${title}</h2>

        <p>${description}</p>
      </div>
    `);
};

setTimeout(() => {
  const notifications = document.querySelectorAll('.notification');

  notifications.forEach(notification => notification.remove());
}, 2000);

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(160, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
