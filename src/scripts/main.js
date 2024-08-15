'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');

  const divCreating = document.createElement('div');

  divCreating.classList.add('notification', type);
  divCreating.style.top = posTop + 'px';
  divCreating.style.right = posRight + 'px';

  const formattedDescription = description.replace(/\n/g, '<br>');

  divCreating.innerHTML = `
    <h2 class="title" font-weight: 700;>${title}</h2>
    <p>${formattedDescription}</p>
  `;

  body.insertAdjacentElement('afterbegin', divCreating);

  setTimeout(() => {
    divCreating.remove();
  }, 3000);
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
