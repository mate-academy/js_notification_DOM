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
  const maxWidth = Math.max(...[...allNotifications].map((notificationValue) =>
    notificationValue.offsetWidth));

  allNotifications.forEach((notificationValue) => {
    notificationValue.style.width = `${maxWidth}px`;
  });

  setTimeout(() => {
    const notificationElement = document.querySelector('.notification');

    notificationElement.remove();
  }, 2000);
};

let posT = 10;
const posR = 10;
const gap = 10;

pushNotification(posT, posR,
  'Title of Success message',
  'Message example.\nNotification should contain title and \ndescription.',
  'success');
posT += document.querySelector('.notification.success').offsetHeight + gap;

pushNotification(posT, posR,
  'Title of Error message',
  'Message example.\n Notification should contain title and \ndescription.',
  'error');
posT += document.querySelector('.notification.error').offsetHeight + gap;

pushNotification(posT, posR,
  'Title of Warning message',
  'Message example.\n Notification should contain title and \ndescription.',
  'warning');
posT += document.querySelector('.notification.warning').offsetHeight + gap;
