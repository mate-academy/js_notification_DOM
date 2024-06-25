'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const nottifocation = document.createElement('div');

  document.querySelector('body').append(nottifocation);

  nottifocation.classList.add('notification');
  nottifocation.classList.add(type);
  nottifocation.style.top = `${posTop}px`;
  nottifocation.style.right = `${posRight}px`;

  nottifocation.insertAdjacentHTML(
    'beforeend',
    `
    <h2 class="title">${title}</h2>
    <p>${description}</p>`,
  );

  setTimeout(() => {
    nottifocation.remove();
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
