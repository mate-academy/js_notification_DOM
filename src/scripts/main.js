'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const transitionTime = 3; // seconds
  const disapearAfter = 2000; // ms

  notification.insertAdjacentHTML('afterbegin',
    `<h2 class="title">${title}</h2>
     <p>${description}</p>`);

  notification.classList.add('notification', type);
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';
  notification.style.transition = transitionTime + 's';
  document.querySelector('body').append(notification);

  setTimeout(() => {
    notification.classList.toggle('fade');
  }, disapearAfter);

  setTimeout(() => {
    notification.remove();
  }, ((transitionTime * 1000) + disapearAfter));
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
