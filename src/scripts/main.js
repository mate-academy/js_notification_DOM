'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const logo = document.querySelector('.logo');
  const notificationBlock = document.createElement('div');

  notificationBlock.classList.add('notification');
  notificationBlock.classList.add(`${type}`);
  notificationBlock.style.top = posTop + 'px';
  notificationBlock.style.right = posRight + 'px';

  const info = `
      <h2 class="title">${title}</h2>
      <p>${description}</p>
`;

  notificationBlock.insertAdjacentHTML('afterbegin', info);
  logo.insertAdjacentElement('afterend', notificationBlock);

  setTimeout(() => {
    notificationBlock.remove();
  }, 2000)


};

setTimeout(() => {
  pushNotification(
    10,
    10,
    'Title of Success message',
    'Message example.\n ' +
    'Notification should contain title and description.',
    'success',
  );
}, 500);

setTimeout(() => {
  pushNotification(
    150,
    10,
    'Title of Error message',
    'Message example.\n ' +
    'Notification should contain title and description.',
    'error',
  );
}, 1000);

setTimeout(() => {
  pushNotification(
    290,
    10,
    'Title of Warning message',
    'Message example.\n ' +
    'Notification should contain title and description.',
    'warning',
  );
}, 1500);
