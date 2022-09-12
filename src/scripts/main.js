'use strict';

const body = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  body.insertAdjacentHTML('beforeend', `
    <div
    style="top: ${posTop}px; right: ${posRight}px;"
    class="notification ${type}">
    <h2 class="title">
    ${title}
    </h2>
    <p>
    ${description}
    </p>
    </div>
    `);

  const messages = document.querySelectorAll('.notification');

  setTimeout(() => {
    for (const message of [...messages]) {
      message.remove();
    }
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
