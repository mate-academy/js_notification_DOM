'use strict';

const pushNotification = (top, right, title, description, type) => {
  const notification = document.createElement('div');

  notification.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
  `;

  notification.classList.add('notification', type);
  notification.style.top = top;
  notification.style.right = right;

  document.body.append(notification);

  setTimeout(() => notification.remove(), 2000);
};

pushNotification(
  '20px',
  '20px',
  'Just relax!',
  'Nothing is so broken that it can not be fixed.',
  'success'
);
