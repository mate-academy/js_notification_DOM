'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const createNotif = document.createElement('div');

  createNotif.classList.add('notification', type);
  createNotif.style.top = `${posTop}px`;
  createNotif.style.right = `${posRight}px`;
  createNotif.style.boxSizing = 'content-box';

  const createTitle = document.createElement('h2');

  createTitle.textContent = title;
  createTitle.classList.add('title');
  createNotif.append(createTitle);

  const createDescript = document.createElement('p');

  createDescript.textContent = description;

  createNotif.append(createDescript);

  document.body.append(createNotif);

  setTimeout(() => {
    createNotif.remove();
  }, 2000);
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
}, 2000);

setTimeout(() => {
  pushNotification(
    150,
    10,
    'Title of Error message',
    'Message example.\n ' +
      'Notification should contain title and description.',
    'error',
  );
}, 4000);

setTimeout(() => {
  pushNotification(
    290,
    10,
    'Title of Warning message',
    'Message example.\n ' +
      'Notification should contain title and description.',
    'warning',
  );
}, 6000);
