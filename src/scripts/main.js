'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const div = document.createElement('div');

  div.classList.add('notification', type);
  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;

  div.insertAdjacentHTML('afterbegin', `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `);

  body.append(div);

  setTimeout(() => {
    div.remove();
  }, '2000');
};

pushNotification(10, 10, 'Title of Success message',
  'Message example. <br>'
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example. <br>'
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example. <br>'
  + 'Notification should contain title and description.', 'warning');
