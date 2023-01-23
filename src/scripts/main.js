'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const page = document.body;
  const notification = document.createElement('DIV');

  notification.className = `notification ${type}`;
  notification.style.top = `${posTop}px`;

  notification.insertAdjacentHTML('afterbegin', `
      <h2 class="title">
        ${title}
      </h2>
      <p class="${type}">
        ${description.slice(0, 16)}
        <br>
        ${description.slice(16)}
      </p>
  `);

  page.prepend(notification);

  setTimeout(() => {
    notification.remove();
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
