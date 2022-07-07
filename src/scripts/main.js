'use strict';

const body = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  body.insertAdjacentHTML('beforeend', `
    <div class="notification ${type}"
      style="top: ${posTop}px; right: ${posRight}px">
      <h2 class="title">${title}</h2>
      <p>${description}</p>
    </div>`
  );

  setTimeout(() => {
    body.children[body.children.length - 1].remove();
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(165, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
