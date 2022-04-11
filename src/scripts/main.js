'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const elementDiv = document.createElement('div');

  elementDiv.className = `notification ${type}`;
  elementDiv.style.top = `${posTop}px`;
  elementDiv.style.right = `${posRight}px`;

  elementDiv.insertAdjacentHTML('afterbegin', `
  <h2 class='title'>${title} </h2>
  <p>${description}</p>
  `);

  document.querySelector('body').insertAdjacentElement('beforeend', elementDiv);

  setTimeout(() => elementDiv.remove(), 2000);
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
