'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');

  document.body.prepend(element);

  element.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description.replace('\n', '<br />')}</p>
  `;

  const messageTitle = document.querySelector('.title');

  messageTitle.style.fontSize = '18px';

  element.classList.add('notification');
  element.classList.add(`${type}`);

  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;

  setTimeout(() => {
    element.remove();
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n'
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
