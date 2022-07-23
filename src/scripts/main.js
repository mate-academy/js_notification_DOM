'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const bodyRef = document.querySelector('body');

  const template = `<div class="notification ${type}"><h2 class="title">${
    title}</h2><p>${description}</p></div>`;

  bodyRef.insertAdjacentHTML('beforeend', template);
  bodyRef.lastChild.style.marginTop = `${posTop}px`;
  bodyRef.lastChild.style.marginRight = `${posRight}px`;

  const notificationArr = document.querySelectorAll('.notification');

  notificationArr.forEach(notif => {
    setTimeout(() => {
      notif.style.display = 'none';
    }, 2000);
  });
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(163, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
