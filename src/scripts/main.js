'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.querySelector('body');

  element.innerHTML += `
    <div class="notification ${type}">
      <h2 class="title">
        ${title}
      </h2>
      <p>
        ${description}
      </p>
    </div>
  `;

  const notification = document.querySelector(`.${type}`);

  notification.style.boxSizing = 'content-box';
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  setTimeout(() => {
    document.querySelector(`.${type}`).remove();
  }, 2000, type);
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
