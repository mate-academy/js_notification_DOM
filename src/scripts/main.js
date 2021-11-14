'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  notification.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `;

  document.body.append(notification);

  setTimeout(() => notification.remove(), 4000);
};

pushNotification(
  10,
  10,
  'Success',
  'You hacked the pentagon successfully.',
  'success'
);

pushNotification(
  150,
  10,
  'Error',
  'Hacking of the pentagon was unsuccessful.',
  'error'
);

pushNotification(
  290,
  10,
  'Warning',
  'FBI is coming for you!',
  'warning'
);
