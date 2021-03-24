'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const h1 = document.querySelector('h1');

  h1.insertAdjacentHTML('afterend',
    `
    <div class = "notification ${type}">
      <h2 class = "title">${title}</h2>
      <p>${description}</p>
    </div>
    `
  );

  const block = document.querySelector('.notification');

  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;

  setTimeout(() => {
    block.remove('.notification');
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
