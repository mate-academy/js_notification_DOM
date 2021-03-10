'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const heading = document.createElement('h2');
  const text = document.createElement('p');

  notification.classList.add('notification', type);
  heading.className = 'title';

  heading.innerText = title;
  text.innerText = description;

  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  heading.style.fontSize = '17px';
  text.style.fontSize = '15px';

  document.body.append(notification);
  notification.append(heading, text);

  setTimeout(() => {
    notification.remove();
  }, 2000);
};

pushNotification(10, 10, 'Title of Success notification',
  'notification example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error notification',
  'notification example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning notification',
  'notification example.\n '
  + 'Notification should contain title and description.', 'warning');
