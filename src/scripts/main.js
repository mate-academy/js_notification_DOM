'use strict';

const pushNotification = (top, right, title, description, type) => {
  const notification = document.createElement('div');
  const header = document.createElement('h2');
  const text = document.createElement('p');

  notification.classList.add('notification', type);
  notification.style.top = `${top}px`;
  notification.style.right = `${right}px`;

  header.classList.add('title');
  header.textContent = title;

  text.textContent = description;

  notification.append(header);
  notification.append(text);

  document.body.append(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
};

pushNotification(20, 20, 'Error', 'some description', 'error');
pushNotification(140, 20, 'Success', 'some description', 'success');
pushNotification(260, 20, 'Warning', 'some description', 'warning');
