'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notifications = document.createElement('div');

  notifications.classList.add('notification', type);

  notifications.insertAdjacentHTML('beforeend', `
    <h2 class="title">
      ${title}
    </h2>

    <p>
      ${description}
    </p>
  `);

  notifications.style.top = `${posTop}px`;

  notifications.style.right = `${posRight}px`;

  document.body.append(notifications);

  setTimeout(() =>
    notifications.remove(), 2000);
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
