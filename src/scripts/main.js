'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const page = document.querySelector('body');

  page.insertAdjacentHTML('afterbegin',
    `<div>
      <h2>${title}</h2>
      <p>${description}</p>
    </div>`
  );

  const header = document.querySelector('h2');
  const block = document.querySelector('div');

  header.className = 'title';
  block.className = `notification ${type}`;

  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;

  setTimeout(() => {
    block.remove();
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
