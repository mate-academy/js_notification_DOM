'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const elem = document.createElement('div');
  document.body.append(elem);
  elem.classList.add('notification', type);

  elem.insertAdjacentHTML('beforeend', `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `)

  elem.style.top = `${posTop}px`;
  elem.style.right = `${posRight}px`;

  setTimeout(() => {
    elem.hidden = true;
  }, 2000)
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
