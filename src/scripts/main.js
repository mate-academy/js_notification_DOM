'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  notification.classList.add('notification', type);
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;
  notification.style.width = `auto`;

  const notificationTitle = document.createElement('h2');
  notificationTitle.classList.add('title');
  notificationTitle.textContent = title;

  const notificationDescription = document.createElement('p');
  notificationDescription.classList.add('p');
  notificationDescription.textContent = description;
  notificationDescription.innerHTML = description.replace(/\n/g, '<br>');

  notification.appendChild(notificationTitle);
  notification.appendChild(notificationDescription);
  document.body.appendChild(notification);

  const allNotifications = document.querySelectorAll('.notification');
  const maxWidth = Math.max(...[...allNotifications].map((notification) => notification.offsetWidth));
  allNotifications.forEach((notification) => notification.style.width = `${maxWidth}px`);

  setTimeout(() => {
    const notificationElement = document.querySelector('.notification');
    notificationElement.remove();
  }, 2000);
};

let posTop = 10;
const posRight = 10;
const gap = 10;

pushNotification(posTop, posRight, 'Title of Success message', 'Message example.\nNotification should contain title and \ndescription.', 'success');
posTop += document.querySelector('.notification.success').offsetHeight + gap;

pushNotification(posTop, posRight, 'Title of Error message', 'Message example.\n Notification should contain title and \ndescription.', 'error');
posTop += document.querySelector('.notification.error').offsetHeight + gap;

pushNotification(posTop, posRight, 'Title of Warning message', 'Message example.\n Notification should contain title and \ndescription.', 'warning');
posTop += document.querySelector('.notification.warning').offsetHeight + gap;
