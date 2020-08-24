/* eslint-disable no-undef */
'use strict';

const pushNotification = (top, right, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification');
  notification.classList.add(type);
  notification.style.top = top;
  notification.style.right = right;

  notification.innerHTML = `
    <h2 class="title">${title}<h2>
    <p>${description}</p>
  `;
  document.body.append(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
};

pushNotification(
  '15px',
  'calc(50vw - 150px)',
  `Ще не вмерла України`,
  'Ні слава, ні воля! Ще вам браття молодії усміхнеться доля',
  'success'
);
