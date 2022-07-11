'use strict';

const page = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  message.className = `notification ${type}`;

  message.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `;

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  page.append(message);

  setTimeout(() => message.remove(), 2000);
};

pushNotification(10, 10, 'Success!!!',
  'Enter valid data.', 'success');

pushNotification(150, 10, 'Error!!!',
  'Enter invalid data.', 'error');

pushNotification(290, 10, 'Warning!!!',
  'Mistake, please, correct data.', 'warning');
