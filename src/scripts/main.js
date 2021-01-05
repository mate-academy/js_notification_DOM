'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');

  block.classList.add('notification', type);

  block.style.cssText = `top: ${posTop}px; right: ${posRight}px`;

  document.body.insertAdjacentElement('afterbegin', block);

  block.insertAdjacentHTML('afterbegin',
    `<h2 class="title">${title}</h2>
    <p>${description}</p>`
  );

  setTimeout(() => block.remove(), 2000);
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
