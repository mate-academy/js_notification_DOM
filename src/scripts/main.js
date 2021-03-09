'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const divElement = document.createElement('div');

  divElement.classList.add('notification', type);

  divElement.insertAdjacentHTML('afterbegin', `
      <h2 class="title">${title}</h2>
      <p>${description}</p>
  `);

  divElement.style.top = `${posTop}px`;
  divElement.style.right = `${posRight}px`;
  document.querySelector('body').append(divElement);

  setTimeout(() => {
    divElement.remove();
  }, 2000);
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
