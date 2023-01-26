'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const notificationTitle = document.createElement('h2');

  notification.className = 'notification';
  notification.classList.add(type);

  notificationTitle.className = 'title';
  notificationTitle.innerHTML = title;

  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  notification.insertAdjacentHTML('afterbegin', `
    <p>
    ${description.slice(0, 16)}
    <br>
    ${description.slice(16)}
    <p/>
  `);

  notification.prepend(notificationTitle);
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
