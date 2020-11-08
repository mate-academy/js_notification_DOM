'use strict';

const pushNotification = (top, right, title, description, type) => {
  const h1 = document.querySelector('h1');
  const notification = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  notification.className = 'notification';
  notification.classList.add(type);
  notification.style.top = top + 'px';
  notification.style.right = right + 'px';
  h2.textContent = title;
  p.textContent = description;
  notification.append(h2);
  notification.append(p);
  document.body.insertBefore(notification, h1);
  setTimeout(() => notification.remove(), 2000);
};

pushNotification(10, 10, 'Title',
  'this is example of result.Notification should contain title and description',
  'success');
