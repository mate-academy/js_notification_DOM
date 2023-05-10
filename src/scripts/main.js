'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);
  notification.style.marginTop = '10px';

  notification.innerHTML = `<h2 class="title">${title}</h2>
  <p>${description}</p>`;

  const lastNotification = document.querySelector('.notification:last-of-type');

  if (lastNotification) {
    notification.style.top = `${parseInt(lastNotification.style.top, 10)
      + lastNotification.offsetHeight + 10}px`;
  } else {
    notification.style.top = `${posTop}px`;
  }

  Object.assign(notification.style, {
    position: 'absolute',
    right: `${posRight}px`,
    top: `${notification.style.top}`,
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
