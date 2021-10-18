'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationParagraph = document.createElement('p');

  notificationTitle.innerText = title;
  notificationParagraph.innerText = description;

  notification.append(notificationTitle, notificationParagraph);

  notification.classList.add('notification', type);
  notificationTitle.className = 'title';

  notification.style.cssText = `
    top : ${posTop}px;
    right: ${posRight}px;
  `;

  notificationTitle.style.fontSize = '18px';

  document.body.append(notification);
  setTimeout(() => notification.remove(), 2000);
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
