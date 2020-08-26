'use strict';

const pushNotification = (top, right, title, description, type) => {
  // write code here
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;

  notification.innerHTML = `
    <h3 class="title">${title}</h3>
    <p>${description}</p>
  `;

  notification.style.top = `${top}px`;
  notification.style.right = `${right}px`;

  document.body.append(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
};

pushNotification(50, 100, 'title', 'desc', 'warning');
