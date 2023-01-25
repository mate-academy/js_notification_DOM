'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const box = document.createElement('div');
  const body = document.querySelector('body');
  const h1 = document.querySelector('h1');

  box.classList.add('notification', type);

  box.insertAdjacentHTML('afterbegin',
    `
    <h2 class='title'>${title}</h2>
    <p>${description}</p>
    `
  );

  body.insertBefore(box, h1.nextSibling);

  box.style.top = `${posTop}px`;
  box.style.right = `${posRight}px`;
  box.style.boxSizing = 'content-box';

  setTimeout(() => box.remove(), 2000);
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
