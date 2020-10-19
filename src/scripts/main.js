'use strict';

const pushNotification = (top, right, title, description, type) => {
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;

  notification.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
  `;

  notification.style.cssText = `top: ${top}; right: ${right}`;

  document.body.append(notification);

  setTimeout(() => notification.remove(), 2000);
};

pushNotification(
  '20px', '20px', 'Congratulations!', 'You\'ve done it', 'success'
);
