'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const mes = document.createElement('div');

  mes.style.top = `${posTop}px`;
  mes.style.right = `${posRight}px`;

  mes.classList.add('notification');
  mes.classList.add(type);

  const titleElement = document.createElement('h2');

  titleElement.textContent = title;

  mes.appendChild(titleElement);

  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;

  mes.appendChild(descriptionElement);

  document.body.appendChild(mes);

  setTimeout(() => {
    mes.remove();
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
