'use strict';

const pushNotification = (top, right, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification');
  notification.classList.add(type);
  notification.style.right = right;
  notification.style.top = top;

  notification.innerHTML = (
    `<h2 class='title'>${title}</h2>
    <p>${description}</p>`
  );

  document.body.append(notification);

  setTimeout(() => notification.remove(), 2000);
};

pushNotification('50px', '50px', 'Title',
  `This is example of result.
  Notification should contain title and description`,
  'warning');
