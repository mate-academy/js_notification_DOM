'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');

  element.setAttribute('class', 'notification');

  switch (type) {
    case 'success':
      element.classList.add('success');

      break;
    case 'error':
      element.classList.add('error');

      break;

    case 'warning':
      element.classList.add('warning');

      break;
  }

  element.innerHTML += `<h2 class="title">${title}</h2>`;
  element.innerHTML += `<p>${description}</p>`;
  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;
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
