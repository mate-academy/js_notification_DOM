'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);
  notification.classList.add(type);

  const styles = notification.style;

  styles.top = posTop + 'px';
  styles.right = posRight + 'px';

  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  h2.classList.add('title');
  h2.textContent = title;
  p.textContent = description;

  notification.append(h2, p);
  document.body.append(notification);

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
