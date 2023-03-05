'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  document.body.insertAdjacentHTML(
    'afterbegin',
    `<div class="notification ${type}">
    <h2 class="title">${title}</h2>
    <p></p>
    </div>`);

  const message = document.querySelector(`.${type}`);
  const messageTitle = document.querySelector('.title');
  const messageText = document.querySelector('p');

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;
  messageTitle.style.letterSpacing = '-1px';
  messageText.innerText = description;

  setTimeout(() => {
    message.remove();
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
