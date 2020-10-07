'use strict';

function pushNotification(top, right, title, description, type) {
  const notification = document.createElement('div');
  const titleOfMessage = document.createElement('h2');
  const descriptionOfMessage = document.createElement('p');

  notification.classList.add('notification');
  notification.classList.add(`${type}`);
  titleOfMessage.innerText = title;
  descriptionOfMessage.innerText = description;

  notification.style.top = top;
  notification.style.right = right;

  notification.append(titleOfMessage);
  notification.append(descriptionOfMessage);
  document.body.append(notification);

  window.setTimeout(() => notification.remove(), 2000);
}

pushNotification(
  '200px',
  '200px',
  'Yeeey success!',
  'You are checking it',
  'success'
);
