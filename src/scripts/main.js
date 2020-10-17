'use strict';

const pushNotification = (top, right, title, description, type) => {
  const notification = document.createElement('div');
  const heading = document.createElement('h1');
  const content = document.createElement('p');
  const body = document.querySelector('body');

  heading.textContent = title;
  content.textContent = description;
  notification.classList.add('notification');
  notification.classList.add(type);
  notification.append(heading);
  notification.append(content);
  notification.style.right = right + 'px';
  notification.style.top = top + 'px';
  body.append(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
};

pushNotification(100, 100, 'TIT', 'TEXT', 'error');
