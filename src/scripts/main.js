'use strict';

const pushNotification = (top, right, title, description, type) => {
  const div = document.createElement('div');
  const htmlString = `
    <h2 class="title">${title}<h2>
    <p>${description}</p>
  `;

  div.className = `notification ${type}`;
  div.style.top = `${top}`;
  div.style.right = `${right}`;
  div.innerHTML = htmlString;

  document.body.append(div);

  setTimeout(() => div.remove(), 2000);
};

pushNotification(
  '100px',
  '50px',
  'Title',
  'Notification should contain title and description',
  'error'
);
