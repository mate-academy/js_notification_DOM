'use strict';

const body = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');

  setTimeout(() => {
    element.style.display = 'none';
  }, 2000);

  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;

  element.classList.add('notification');
  element.classList.add(type);

  const firtsPart = description.split('\n')[0];
  const secondPart = description.split('\n')[1];

  element.insertAdjacentHTML('beforeend', `
      <h2 class="title">${title}</h2>
      <p>
        ${firtsPart}
        <br>
        ${secondPart}
      </p>
    `);

  body.append(element);
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
