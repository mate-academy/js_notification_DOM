'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const notifTitle = document.createElement('h2');
  const notifDescrb = document.createElement('p');

  notification.className = `notification ${type}`;
  notification.style.width = '320px';
  notification.style.height = 'min-content';
  notification.style.right = `${posRight}px`;
  notification.style.top = `${posTop}px`;
  notification.style.padding = '10px';

  notifTitle.className = 'title';
  notifTitle.textContent = `${title}`;
  notifDescrb.textContent = `${description}`;

  document.body.append(notification);
  notification.append(notifTitle);
  notification.append(notifDescrb);

  setTimeout(function() {
    notification.setAttribute('hidden', 'hidden');
  },
  2000);
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
