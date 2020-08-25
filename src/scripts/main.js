'use strict';

const pushNotification = (top, right, title, description, type) => {
  const notification = document.createElement('div');

  notification.className = `notification`;
  notification.classList += ` ${type}`;

  notification.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `;

  notification.style.top = `${top}%`;
  notification.style.right = `${right}%`;

  document.body.append(notification);
  setTimeout(() => notification.remove(), 2000);
};

pushNotification(5, 2, `Hello!`,
  `This is example of result.
  Notification should contain title and description`,
  'error');
