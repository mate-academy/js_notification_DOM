'use strict';

const pushNotification = (top, right, title, description, type) => {
  const page = document.querySelector('body');

  page.insertAdjacentHTML('beforeend', `
    <div class="notification ${type}">
      <h2 class="title">${title}</h2>
      <p>${description}</p>
    </div>
  `);

  const notification = document.querySelector('.notification');

  notification.style.top = `${top}px`;
  notification.style.right = `${right}px`;

  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
};

pushNotification(50, 70, 'Congratulation!',
  'You successfully read this important alert message!', 'success');
