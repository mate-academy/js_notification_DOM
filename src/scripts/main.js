'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const mess = document.createElement('div');

  mess.className = `notification ${type}`;
  mess.style.top = `${posTop}px`;
  mess.style.right = `${posRight}px`;

  mess.innerHTML = `<h2 class="title">${title}</h2><p class='description'>${description}</p>`;

  document.body.appendChild(mess);

  setTimeout(() => {
    mess.style.display = 'none';
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
