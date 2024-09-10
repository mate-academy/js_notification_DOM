'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');

  element.classList.add('notification');
  element.classList.add(type);

  // switch (type) {
  //   case 'success':
  //     element.classList.add('success');
  //     break;
  //   case 'error':
  //     element.classList.add('error');
  //     break;
  //   case 'warning':
  //     element.classList.add('warning');
  //     break;
  // }

  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;

  const titleElement = document.createElement('h2');

  titleElement.textContent = title;
  element.appendChild(titleElement);
  titleElement.classList.add('title');

  const titleDesc = document.createElement('p');

  titleDesc.textContent = description;
  element.appendChild(titleDesc);

  document.body.appendChild(element);

  setTimeout(() => {
    element.style.display = 'none';
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
  165,
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
