'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const h2 = document.createElement('h2');
  const paragraph = document.createElement('p');

  notification.className = `notification ${type}`;
  h2.className = 'title';

  h2.textContent = `${title}`;
  paragraph.textContent = `${description}`;

  notification.append(h2, paragraph);
  document.querySelector('body').append(notification);

  notification.style.cssText = `top: ${posTop}px; right: ${posRight}px`;

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
