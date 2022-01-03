'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  message.classList.add('notification', type);
  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  message.insertAdjacentHTML('afterbegin', `
    <h2 class='title'>${title}</h2>
    <p>${description}</p>
  `);

  document.body.append(message);

  setTimeout(() => message.remove(), 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Success <br>'
  + 'You have successfully completed the task.', 'success');

pushNotification(180, 10, 'Title of Error message',
  'Error <br>'
  + 'You failed the task.', 'error');

pushNotification(305, 10, 'Title of Warning message',
  'Warning <br>'
  + 'You need to change the code a bit.', 'warning');
