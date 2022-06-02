'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification');
  notification.classList.add(type);

  const h2 = document.createElement('h2');

  h2.setAttribute('title', 'title');
  h2.textContent = title;
  notification.append(h2);

  const desc = document.createElement('p');

  desc.textContent = description;
  notification.append(desc);

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;
  document.body.append(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(163, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
