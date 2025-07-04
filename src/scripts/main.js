'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const body = document.querySelector('body');

  body.appendChild(notification);

  const h2 = document.createElement('h2');

  notification.insertAdjacentElement('afterbegin', h2);

  notification.insertAdjacentHTML('beforeend', `<p>${description}</p>`);
  h2.insertAdjacentHTML('afterbegin', `${title}`);

  notification.setAttribute('class', 'notification');

  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  notification.classList.add(type);
  h2.classList.add('title');

  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.<br> ' +
    'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.<br> ' +
    'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.<br> ' +
    'Notification should contain title and description.',
  'warning',
);
