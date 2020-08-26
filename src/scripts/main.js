'use strict';

const pushNotification = (top, right, title, description, type) => {
  const message = document.createElement('div');

  document.body.append(message);

  message.className = `notification ${type}`;

  message.innerHTML = `
    <h2 class='title'>${title}<h2>
    <p>${description}<p>
  `;

  message.style.top = `${top}px`;
  message.style.right = `${right}px`;

  setTimeout(() => message.remove(), 2000);
};

pushNotification(20, 40, 'title', 'Great! Good job!', 'success');
