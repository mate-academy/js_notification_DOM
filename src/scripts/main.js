'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const note = document.createElement('div');

  note.classList.add('notification', type);
  note.style.top = posTop + 'px';
  note.style.right = posRight + 'px';

  note.insertAdjacentHTML('afterbegin', `
    <h2 class = "title">${title}</h2>
    <p>${description}</p>
  `);

  document.querySelector('body').append(note);

  setTimeout(() => {
    note.remove();
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
