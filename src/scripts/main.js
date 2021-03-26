'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const elem = document.createElement('div');

  elem.classList.add('notification', type);
  elem.style.top = `${posTop}px`;
  elem.style.right = `${posRight}px`;

  elem.insertAdjacentHTML('afterbegin', `<h2 class="title">${title}</h2>
    <p>${description}</p>`);

  document.querySelector('body').append(elem);

  setTimeout(() => elem.remove(), 2000);
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
