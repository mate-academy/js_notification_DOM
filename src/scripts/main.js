'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const logo = document.querySelector('.logo');

  logo.insertAdjacentHTML('afterend', `
    <div class="notification ${type}">
      <h2 class="title">${title}</h2>
      <p>${description}</p>
    </div>`
  );

  const notification = document.querySelector(`.${type}`);

  notification.style.marginTop = `${posTop}px`;
  notification.style.marginRight = `${posRight}px`;

  setTimeout(() => notification.remove(), 2000);
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
