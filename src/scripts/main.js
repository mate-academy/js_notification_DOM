'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  document.body.insertAdjacentHTML(
    'beforeend',
    `
    <div class="notification ${type}">
    <h1>${title}</h1>
    <p>${description}</p>
    </div>
    `,
  );

  const mess = document.querySelector('.notification:last-child');

  mess.style.top = `${posTop}px`;
  mess.style.right = `${posRight}px`;

  setTimeout(() => {
    mess.remove();
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
  180,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  350,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
