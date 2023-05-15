'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const logo = document.querySelector('.logo');
  const content = `
    <div
      class="notification ${type}"
      style="top: ${posTop}px; right: ${posRight}px;"
      ">
      <h2 class="title">${title}</h2>
      <p>${description}</p>
    </div>
  `;

  setTimeout(() => {
    const notification = document.querySelector('.notification');

    if (notification) {
      notification.remove();
    }
  }, 3000);

  logo.insertAdjacentHTML('afterend', content);
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
