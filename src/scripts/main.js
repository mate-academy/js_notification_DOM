'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messege = document.createElement('div');

  messege.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `;

  messege.classList.add('notification', type);
  messege.style.top = `${posTop}px`;
  messege.style.right = `${posRight}px`;

  setTimeout(() => {
    document.body.append(messege);
  }, 2000);

  setTimeout(() => messege.remove(), 4000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
