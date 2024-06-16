'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const notification = document.createElement('div');

  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  notification.insertAdjacentHTML(
    'afterbegin',
    `<h2 class="title">${title}</h2>`,
  );
  notification.insertAdjacentHTML('beforeend', `<p>${description}</p>`);

  notification.classList.add('notification');

  switch (type) {
    case 'success':
      notification.classList.add('success');
      break;

    case 'warning':
      notification.classList.add('warning');
      break;

    default:
      notification.classList.add('error');
  }

  body.appendChild(notification);

  setTimeout(() => (notification.style.display = 'none'), 2000);
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
