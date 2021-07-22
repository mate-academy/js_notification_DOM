'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const general = document.querySelector('body');
  // console.log(general);

  const notification = document.createElement('div');

  notification.classList = `notification ${type}`;
  notification.id = 'hide';

  notification.innerHTML = `
    <h2 class = 'title'>${title}</h2>
    <p>${description}</p>
  `;

  notification.style.cssText = `top:${posTop}px;right:${posRight}px`;
  general.append(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
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
