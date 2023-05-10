'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  let topPosition = posTop;

  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  notification.innerHTML = `<h2 class="title">${title}</h2>
  <p>${description}</p>`;

  const lastNotification = document.querySelector('.notification:last-of-type');

  if (lastNotification) {
    topPosition = parseInt(lastNotification.style.top, 10)
       + lastNotification.offsetHeight + 10;
  }

  Object.assign(notification.style, {
    position: 'absolute',
    right: `${posRight}px`,
    top: `${topPosition}px`,
  });

  document.body.appendChild(notification);

  setTimeout(() => notification.remove(), 2000);
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
