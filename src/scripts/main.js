'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');
  const body = document.querySelector('body');

  div.className = `notification ${type}`;

  div.insertAdjacentHTML("afterbegin",
    `<h2 class="title">${title}</h2>
    <p>${description}</p>`);

  body.append(div);

  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;

  setTimeout(() => {
    div.remove();
  }, 2000);

  return div;

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
