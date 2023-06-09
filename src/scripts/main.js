'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const h1 = document.querySelector('h1');

  h1.insertAdjacentHTML('afterend',
    `<div class='notification ${type}'>
      <h2 class='title'>${title}</h2>
      <p>${description}</p>
    </div>`
  );

  const element = document.querySelector(`.${type}`);

  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;

  setTimeout(() => {
    element.setAttribute('hidden', 'true');
  }, 2000);
};

const notificationTitle = 'Message example.\n ';
const notificationDescription
  = 'Notification should contain title and description.';

pushNotification(10, 10, 'Title of Success message',
  notificationTitle + notificationDescription, 'success');

pushNotification(150, 10, 'Title of Error message',
  notificationTitle + notificationDescription, 'error');

pushNotification(290, 10, 'Title of Warning message',
  notificationTitle + notificationDescription, 'warning');
