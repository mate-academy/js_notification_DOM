'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = `
    <div class="notification ${type}">
      <h2 class="title">${title}</h2>
      <p class="description">${description}</p>
    </div>`;

  document.body.insertAdjacentHTML('beforeend', message);

  const element = document.querySelector(`.notification.${type}`);

  element.style.top = posTop + 'px';
  element.style.right = posRight + 'px';

  setTimeout(() => {
    element.hidden = true;
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
