'use strict';

const pushNotification = (top, right, title, description, type) => {
  const bodySection = document.querySelector('body');
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;

  notification.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `;

  notification.style.top = top;
  notification.style.right = right;

  bodySection.append(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
};

pushNotification(
  '20px',
  '20px',
  'Title',
  'This is example of result',
  'succes'
);
