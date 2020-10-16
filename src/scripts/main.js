'use strict';

const pushNotification = (top, right, title, description, type) => {
  const notify = document.createElement('div');

  notify.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `;

  notify.classList.add('notification', type);
  notify.style.top = top;
  notify.style.right = right;

  document.body.append(notify);
  setTimeout(() => notify.remove(), 2000);
};

pushNotification(
  '20px',
  '10px',
  'You are awesome',
  'Remember it!',
  'success'
);
