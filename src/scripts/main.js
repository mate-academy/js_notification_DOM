'use strict';

const pushNotification = (
  posTop = 0,
  posRight = '',
  title = '',
  description = '',
  type = ''
) => {
  const deleteNotification = element => element.remove();

  const notification = document.createElement('div');

  notification.style = `top: ${posTop}px; right: ${posRight}px;`;
  notification.className = `notification ${type}`;

  notification.innerHTML = `
      <h2 class='title'>${title}</h2>
      <p>${description}</p>
  `;

  document.body.append(notification);

  setTimeout(() => deleteNotification(notification), 2000);
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
