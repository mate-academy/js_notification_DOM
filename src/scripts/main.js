'use strict';

function pushNotification(posTop, posRight, title, description, type) {
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;
  notification.dataset.qa = 'notification';

  notification.innerHTML = `
    <h2 class="title">
      ${title}
    </h2>
    <p>
      ${description}
    </p>
  `;

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;
  notification.style.transition = `opacity .3s`;
  notification.style.opacity = '0';

  document.body.insertAdjacentElement('beforeend', notification);

  setTimeout(() => {
    notification.style.opacity = '1';
  }, 0);

  setTimeout(() => {
    notification.style.opacity = '0';
  }, 1700);

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
